import React, { useState, useRef } from 'react';
import { QRCodeCanvas } from 'qrcode.react';
import { Card, Input, Button, Space, Typography, message } from 'antd';
import { DownloadOutlined, LinkOutlined } from '@ant-design/icons';

const { Title, Text } = Typography;

const App: React.FC = () => {
  const [text, setText] = useState<string>('https://example.com');
  const [qrValue, setQrValue] = useState<string>('https://example.com');
  const qrRef = useRef<HTMLDivElement>(null);

  const handleGenerate = () => {
    if (!text) {
      message.error('Please enter a link');
      return;
    }
    setQrValue(text);
    message.success('QR Code generated!');
  };

  const downloadQRCode = () => {
    const canvas = qrRef.current?.querySelector('canvas');
    if (canvas) {
      const url = canvas.toDataURL('image/png');
      const a = document.createElement('a');
      a.download = 'qrcode.png';
      a.href = url;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
    } else {
        message.error('Could not find canvas to download');
    }
  };

  return (
    <Card style={{ width: 400, textAlign: 'center' }}>
      <Title level={3}>Permanent QR Code</Title>
      <Text type="secondary">Generate a QR code for your link</Text>
      
      <div style={{ margin: '24px 0', display: 'flex', justifyContent: 'center' }} ref={qrRef}>
        <QRCodeCanvas
          value={qrValue}
          size={200}
          level={"H"}
          includeMargin={true}
        />
      </div>

      <Space direction="vertical" style={{ width: '100%' }} size="large">
        <Input 
          prefix={<LinkOutlined />} 
          placeholder="Enter link URL" 
          value={text} 
          onChange={(e) => setText(e.target.value)}
          onPressEnter={handleGenerate}
        />
        
        <Space style={{ width: '100%', justifyContent: 'center' }}>
          <Button type="primary" onClick={handleGenerate}>
            Generate
          </Button>
          <Button icon={<DownloadOutlined />} onClick={downloadQRCode}>
            Download
          </Button>
        </Space>
      </Space>
    </Card>
  );
};

export default App;

