import React, { useState, useRef } from 'react';
import { Button } from 'zxreact-components';
import './styles.css';

interface MedicalRecord {
  id: string;
  patientName: string;
  patientId: string;
  gender: '男' | '女';
  age: number;
  department: string;
  doctor: string;
  visitDate: string;
  diagnosis: string;
  symptoms: string;
  treatment: string;
  prescription: string[];
  notes: string;
}

// 模拟病历数据
const mockMedicalRecords: MedicalRecord[] = [
  {
    id: '001',
    patientName: '张三',
    patientId: '320101199001011234',
    gender: '男',
    age: 34,
    department: '内科',
    doctor: '李医生',
    visitDate: '2024-12-10',
    diagnosis: '感冒',
    symptoms: '发热、咳嗽、鼻塞',
    treatment: '休息、多喝水、按时服药',
    prescription: ['阿莫西林胶囊 0.25g bid', '复方甘草片 2片 tid'],
    notes: '三天后复查，如症状未缓解请及时就诊'
  },
  {
    id: '002',
    patientName: '李四',
    patientId: '320101198501011234',
    gender: '女',
    age: 39,
    department: '内科',
    doctor: '王医生',
    visitDate: '2024-12-08',
    diagnosis: '高血压',
    symptoms: '头晕、头痛',
    treatment: '低盐饮食、规律作息、按时服药',
    prescription: ['氨氯地平片 5mg qd', '氢氯噻嗪片 25mg qd'],
    notes: '一个月后复查血压，调整用药剂量'
  }
];

const ElectronicMedicalRecord: React.FC = () => {
  const [selectedRecord, setSelectedRecord] = useState<MedicalRecord | null>(mockMedicalRecords[0]);
  const [records] = useState<MedicalRecord[]>(mockMedicalRecords);
  const printRef = useRef<HTMLDivElement>(null);

  const handlePrint = () => {
    if (!selectedRecord) {
      alert('请先选择要打印的病历');
      return;
    }

    const printContent = printRef.current?.innerHTML;
    if (!printContent) return;

    const printWindow = window.open('', '_blank');
    if (!printWindow) return;

    printWindow.document.write(`
      <html>
        <head>
          <title>病历打印 - ${selectedRecord.patientName}</title>
          <style>
            body {
              font-family: 'Microsoft YaHei', Arial, sans-serif;
              margin: 20px;
              line-height: 1.6;
              color: #333;
            }
            .print-header {
              text-align: center;
              border-bottom: 2px solid #333;
              padding-bottom: 10px;
              margin-bottom: 20px;
            }
            .print-title {
              font-size: 24px;
              font-weight: bold;
              margin-bottom: 10px;
            }
            .patient-info {
              display: grid;
              grid-template-columns: 1fr 1fr;
              gap: 10px;
              margin-bottom: 20px;
              padding: 15px;
              border: 1px solid #ddd;
              background-color: #f9f9f9;
            }
            .info-item {
              display: flex;
            }
            .info-label {
              font-weight: bold;
              width: 80px;
              flex-shrink: 0;
            }
            .section {
              margin-bottom: 20px;
              padding: 15px;
              border: 1px solid #ddd;
            }
            .section-title {
              font-weight: bold;
              font-size: 16px;
              color: #2c3e50;
              border-bottom: 1px solid #ddd;
              padding-bottom: 5px;
              margin-bottom: 10px;
            }
            .prescription-list {
              list-style: none;
              padding: 0;
            }
            .prescription-list li {
              padding: 5px 0;
              border-bottom: 1px dotted #ccc;
            }
            .print-footer {
              margin-top: 40px;
              border-top: 1px solid #ddd;
              padding-top: 20px;
              text-align: right;
            }
            @media print {
              body { margin: 0; }
              .no-print { display: none; }
            }
          </style>
        </head>
        <body>
          ${printContent}
        </body>
      </html>
    `);

    printWindow.document.close();
    printWindow.focus();
    setTimeout(() => {
      printWindow.print();
      printWindow.close();
    }, 250);
  };

  return (
    <div className="medical-record-container">
      <div className="medical-record-header">
        <h1>电子病历系统</h1>
        <div className="action-buttons">
          <Button
            onClick={handlePrint}
            disabled={!selectedRecord}
            className="print-btn"
          >
            🖨️ 打印病历
          </Button>
        </div>
      </div>

      <div className="medical-record-content">
        {/* 左侧病历列表 */}
        <div className="record-list">
          <h3>病历列表</h3>
          {records.map((record) => (
            <div
              key={record.id}
              className={`record-item ${selectedRecord?.id === record.id ? 'active' : ''}`}
              onClick={() => setSelectedRecord(record)}
            >
              <div className="record-patient">{record.patientName}</div>
              <div className="record-date">{record.visitDate}</div>
              <div className="record-department">{record.department}</div>
            </div>
          ))}
        </div>

        {/* 右侧病历详情 */}
        <div className="record-detail">
          {selectedRecord ? (
            <div ref={printRef} className="record-display">
              <div className="print-header">
                <div className="print-title">电子病历</div>
                <div>医疗机构：某某医院</div>
              </div>

              <div className="patient-info">
                <div className="info-item">
                  <span className="info-label">姓名：</span>
                  <span>{selectedRecord.patientName}</span>
                </div>
                <div className="info-item">
                  <span className="info-label">身份证号：</span>
                  <span>{selectedRecord.patientId}</span>
                </div>
                <div className="info-item">
                  <span className="info-label">性别：</span>
                  <span>{selectedRecord.gender}</span>
                </div>
                <div className="info-item">
                  <span className="info-label">年龄：</span>
                  <span>{selectedRecord.age}岁</span>
                </div>
                <div className="info-item">
                  <span className="info-label">科室：</span>
                  <span>{selectedRecord.department}</span>
                </div>
                <div className="info-item">
                  <span className="info-label">医生：</span>
                  <span>{selectedRecord.doctor}</span>
                </div>
                <div className="info-item">
                  <span className="info-label">就诊日期：</span>
                  <span>{selectedRecord.visitDate}</span>
                </div>
              </div>

              <div className="section">
                <div className="section-title">主要症状</div>
                <div>{selectedRecord.symptoms}</div>
              </div>

              <div className="section">
                <div className="section-title">诊断结果</div>
                <div>{selectedRecord.diagnosis}</div>
              </div>

              <div className="section">
                <div className="section-title">治疗方案</div>
                <div>{selectedRecord.treatment}</div>
              </div>

              <div className="section">
                <div className="section-title">处方药物</div>
                <ul className="prescription-list">
                  {selectedRecord.prescription.map((item, index) => (
                    <li key={index}>{index + 1}. {item}</li>
                  ))}
                </ul>
              </div>

              <div className="section">
                <div className="section-title">医嘱备注</div>
                <div>{selectedRecord.notes}</div>
              </div>

              <div className="print-footer">
                <div>医生签名：{selectedRecord.doctor}</div>
                <div>打印时间：{new Date().toLocaleString()}</div>
              </div>
            </div>
          ) : (
            <div className="no-record-selected">
              <p>请从左侧列表选择要查看的病历</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ElectronicMedicalRecord;