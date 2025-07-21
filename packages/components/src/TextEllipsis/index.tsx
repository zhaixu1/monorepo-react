import React, { useMemo, memo, useRef, useEffect, useState } from 'react';
import { Tooltip } from 'antd';
import { isUndef } from '@monorepo/lib';
import './index.less'
function TextEllipsis(props: any) {
    console.log(isUndef(23232), isUndef(null), 'isUndef');
    
  const { content } = props;
  const [isEllipsis, setEllipsis] = useState(false);
  const wrap = useRef(null);

  const realContent = useMemo(() => {
    
    return isUndef(content) ? '------' : content;
  }, [content]);

  useEffect(() => {
    if (!wrap?.current) return;

    let fontSize = window.getComputedStyle(wrap.current).fontSize;
    let width = window.getComputedStyle(wrap.current).width.replace('px', '');
    let p: HTMLParagraphElement | null = document.createElement('p');
    p.style.fontSize = fontSize;
    p.style.whiteSpace = 'nowrap';
    p.style.position = 'fixed';
    p.style.top = '-100px';
    p.style.opacity = '0';
    p.innerHTML = content;
    document.body.appendChild(p);
    const range = document.createRange();
    range.setStart(p, 0);
    range.setEnd(p, p.childNodes.length);
    let textWidth = range.getBoundingClientRect().width;
    document.body.removeChild(p);
    p = null;
    console.log(width, 'width');
    console.log(textWidth, 'textWidth');

    
    
    if (width && textWidth && parseInt(width) < textWidth) {
        console.log(111);
        
      setEllipsis(true);
    } else {
      setEllipsis(false);
    }
  }, [content]);

  return (
    <div className={'mt-ui-ellipsis'} ref={wrap}>
      {isEllipsis ? (
        <Tooltip title={realContent} placement="topLeft">
          <span className="mt-ui-ellipsis">{realContent}</span>
        </Tooltip>
      ) : (
        <span className="screen-min">{realContent}</span>
      )}
    </div>
  );
}

export default memo(TextEllipsis);
