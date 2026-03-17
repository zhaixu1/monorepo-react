#!/bin/bash

# MyExpress Deployment Script
set -e

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Functions
log_info() {
    echo -e "${GREEN}[INFO]${NC} $1"
}

log_warn() {
    echo -e "${YELLOW}[WARN]${NC} $1"
}

log_error() {
    echo -e "${RED}[ERROR]${NC} $1"
}

# Check if required commands exist
check_requirements() {
    log_info "Checking requirements..."

    if ! command -v docker &> /dev/null; then
        log_error "Docker is not installed or not in PATH"
        exit 1
    fi

    if ! command -v docker-compose &> /dev/null; then
        log_error "Docker Compose is not installed or not in PATH"
        exit 1
    fi

    log_info "Requirements check passed"
}

# Load environment variables
load_env() {
    if [ ! -f .env ]; then
        log_error ".env file not found"
        exit 1
    fi

    log_info "Loading environment variables..."
    export $(cat .env | grep -v ^# | xargs)
}

# Build and deploy
deploy() {
    local environment=${1:-development}

    log_info "Deploying MyExpress in $environment mode..."

    if [ "$environment" = "production" ]; then
        # Production deployment
        log_info "Building production images..."
        docker-compose -f docker-compose.prod.yml build

        log_info "Starting production services..."
        docker-compose -f docker-compose.prod.yml up -d

        log_info "Running database migrations..."
        docker-compose -f docker-compose.prod.yml exec app npx prisma migrate deploy
    else
        # Development deployment
        log_info "Starting development services..."
        docker-compose up -d

        log_info "Running database migrations..."
        docker-compose exec app npx prisma migrate dev
    fi

    log_info "Deployment completed successfully!"
    log_info "Application is running at: http://localhost:3000"
    log_info "API Documentation: http://localhost:3000/api-docs"
}

# Stop services
stop() {
    local environment=${1:-development}

    log_info "Stopping services..."

    if [ "$environment" = "production" ]; then
        docker-compose -f docker-compose.prod.yml down
    else
        docker-compose down
    fi

    log_info "Services stopped"
}

# Show logs
logs() {
    local environment=${1:-development}
    local service=${2:-app}

    if [ "$environment" = "production" ]; then
        docker-compose -f docker-compose.prod.yml logs -f "$service"
    else
        docker-compose logs -f "$service"
    fi
}

# Show status
status() {
    local environment=${1:-development}

    if [ "$environment" = "production" ]; then
        docker-compose -f docker-compose.prod.yml ps
    else
        docker-compose ps
    fi
}

# Backup database
backup() {
    local backup_file="backup_$(date +%Y%m%d_%H%M%S).sql"

    log_info "Creating database backup: $backup_file"

    docker-compose exec postgres pg_dump -U postgres myexpress_db > "backups/$backup_file"

    log_info "Backup created successfully: backups/$backup_file"
}

# Restore database
restore() {
    local backup_file=$1

    if [ -z "$backup_file" ]; then
        log_error "Please specify backup file"
        exit 1
    fi

    if [ ! -f "$backup_file" ]; then
        log_error "Backup file not found: $backup_file"
        exit 1
    fi

    log_warn "This will overwrite the existing database. Are you sure? (y/N)"
    read -r confirmation

    if [ "$confirmation" = "y" ] || [ "$confirmation" = "Y" ]; then
        log_info "Restoring database from: $backup_file"
        docker-compose exec -T postgres psql -U postgres myexpress_db < "$backup_file"
        log_info "Database restored successfully"
    else
        log_info "Restore cancelled"
    fi
}

# Show help
show_help() {
    echo "MyExpress Deployment Script"
    echo ""
    echo "Usage: $0 [COMMAND] [OPTIONS]"
    echo ""
    echo "Commands:"
    echo "  deploy [env]     Deploy application (env: development|production)"
    echo "  stop [env]       Stop services"
    echo "  logs [env] [svc] Show logs (svc: app|postgres|redis|nginx)"
    echo "  status [env]     Show service status"
    echo "  backup           Backup database"
    echo "  restore [file]   Restore database from backup"
    echo "  help             Show this help message"
    echo ""
    echo "Examples:"
    echo "  $0 deploy development"
    echo "  $0 deploy production"
    echo "  $0 logs production app"
    echo "  $0 backup"
    echo "  $0 restore backups/backup_20231201_120000.sql"
}

# Main script
main() {
    check_requirements

    # Create backups directory if it doesn't exist
    mkdir -p backups

    case "$1" in
        deploy)
            load_env
            deploy "$2"
            ;;
        stop)
            stop "$2"
            ;;
        logs)
            logs "$2" "$3"
            ;;
        status)
            status "$2"
            ;;
        backup)
            backup
            ;;
        restore)
            restore "$2"
            ;;
        help|--help|-h)
            show_help
            ;;
        *)
            log_error "Unknown command: $1"
            show_help
            exit 1
            ;;
    esac
}

# Run main function with all arguments
main "$@"