import React, { useRef, useMemo } from 'react'
import { Table, TableProps } from 'antd';
// import './src/index.css'



function VirtualTable(props: any) {

    const tableRef = useRef<TableProps<any>>(null);

    const { columns = [], dataSource = [], pagination, defaultPageSize = 10 } = props;

    const otherProps = useMemo(() => {
        const newProps = { ...props };
        ['title', 'toolBarRender', 'ref', 'child', 'columns', 'dataSource', 'pagination', 'defaultPageSize'].forEach((key) => {
          delete newProps[key];
        });
        return newProps;
      }, [props]);

    const mergedPagination = useMemo(() => {
        if (pagination === false) return false;
        if (pagination === undefined || pagination === true) return { pageSize: defaultPageSize };
        return { pageSize: defaultPageSize, ...pagination };
    }, [pagination, defaultPageSize]);
    
    return (
        <div className="zx-virtual-table">
        
            <Table
                ref={tableRef as any}
                {...otherProps}
                columns={columns}
                dataSource={dataSource}
                pagination={mergedPagination}
               
            />

        </div>
    )


}

export default VirtualTable;