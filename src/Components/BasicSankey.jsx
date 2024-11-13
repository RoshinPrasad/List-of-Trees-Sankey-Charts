import React, { useEffect, useRef } from 'react';
import ApexSankey from 'apexsankey';

const defaultTooltipTemplate = ({ source, target, value }) => {
  return `
    <div style='display:flex;align-items:center;gap:5px;'>
      <div style='width:12px;height:12px;background-color:${source.color}'></div>
      <div>${source.title}</div>
      <div>=></div>
      <div style='width:12px;height:12px;background-color:${target.color}'></div>
      <div>${target.title}</div>
      <div>: ${value}</div> 
    </div>
  `;
};

const BasicSankey = ({ data, customOptions = {} }) => {
  const chartInstanceRef = useRef(null);

  useEffect(() => {
    // Create container element
    const container = document.createElement('div');
    container.id = 'sankey-container';
    
    // Create tooltip container if it doesn't exist
    let tooltipContainer = document.getElementById('sankey-tooltip-container');
    if (!tooltipContainer) {
      tooltipContainer = document.createElement('div');
      tooltipContainer.id = 'sankey-tooltip-container';
      tooltipContainer.style.position = 'absolute';
      tooltipContainer.style.display = 'none';
      document.body.appendChild(tooltipContainer);
    }

    // Default options
    const defaultOptions = {
      width: 800,
      height: 800,
      canvasStyle: 'border: 1px solid #caced0; background: #f6f6f6;',
      spacing: 100,
      nodeWidth: 20,
      nodeBorderWidth: 1,
      nodeBorderColor: 'none',
      onNodeClick: (node) => console.log('Node clicked:', node),
      edgeOpacity: 0.4,
      enableTooltip: true,
      tooltipId: 'sankey-tooltip-container',
      tooltipTemplate: defaultTooltipTemplate,
      tooltipBorderColor: '#BCBCBC',
      tooltipBGColor: '#FFFFFF',
      fontSize: '14px',
      fontFamily: 'inherit',
      fontWeight: 400,
      fontColor: '#000000'
    };

    const options = {
      ...defaultOptions,
      ...customOptions
    };

    chartInstanceRef.current = new ApexSankey(container, options);
    chartInstanceRef.current.render(data);

    // Append to DOM
    const wrapper = document.getElementById('sankey-wrapper');
    if (wrapper) {
      wrapper.appendChild(container);
    }

    // Cleanup function
    return () => {
      if (container && container.parentNode) {
        container.parentNode.removeChild(container);
      }
      chartInstanceRef.current = null;
    };
  }, [data, customOptions]);

  return <div id="sankey-wrapper"  />;
};

export default BasicSankey;