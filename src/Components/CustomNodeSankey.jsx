import React, { useEffect, useRef } from 'react';
import ApexSankey from 'apexsankey';

const CustomNodeSankey = () => {
  const chartRef = useRef(null);
  const chartInstanceRef = useRef(null);

  const data = {
    nodes: [
      {id: 'Applications', title: 'Applications'},
      {id: 'Accepted', title: 'Accepted'},
      {id: 'Rejected', title: 'Rejected'},
      {id: 'In Progress', title: 'In Progress'},
      {id: 'Software Engineering', title: 'Software Engineering'},
      {id: 'Data Science', title: 'Data Science'},
      {id: 'Marketing', title: 'Marketing'},
      {id: 'Sales', title: 'Sales'},
      {id: 'HR', title: 'HR'},
      {id: 'Finance', title: 'Finance'},
      {id: 'Internship', title: 'Internship'},
      {id: 'Junior', title: 'Junior'},
      {id: 'Mid-level', title: 'Mid-level'},
      {id: 'Senior', title: 'Senior'},
      {id: 'Entry Level', title: 'Entry Level'},
      {id: 'Full-time', title: 'Full-time'},
      {id: 'Part-time', title: 'Part-time'},
    ],
    edges: [
      {source: 'Applications', target: 'Accepted', value: 10},
      {source: 'Applications', target: 'Rejected', value: 15},
      {source: 'Applications', target: 'In Progress', value: 10},
      {source: 'Accepted', target: 'Software Engineering', value: 4},
      {source: 'Accepted', target: 'Data Science', value: 2},
      {source: 'Accepted', target: 'Marketing', value: 1},
      {source: 'Accepted', target: 'Sales', value: 1},
      {source: 'Accepted', target: 'HR', value: 1},
      {source: 'Accepted', target: 'Finance', value: 1},
      {source: 'Rejected', target: 'Software Engineering', value: 5},
      {source: 'Rejected', target: 'Data Science', value: 3},
      {source: 'Rejected', target: 'Marketing', value: 2},
      {source: 'Rejected', target: 'Sales', value: 2},
      {source: 'Rejected', target: 'HR', value: 2},
      {source: 'Rejected', target: 'Finance', value: 1},
      {source: 'In Progress', target: 'Software Engineering', value: 3},
      {source: 'In Progress', target: 'Data Science', value: 2},
      {source: 'In Progress', target: 'Marketing', value: 2},
      {source: 'In Progress', target: 'Sales', value: 1},
      {source: 'In Progress', target: 'HR', value: 1},
      {source: 'In Progress', target: 'Finance', value: 1},
      {source: 'Software Engineering', target: 'Internship', value: 1},
      {source: 'Software Engineering', target: 'Junior', value: 1},
      {source: 'Software Engineering', target: 'Mid-level', value: 1},
      {source: 'Software Engineering', target: 'Senior', value: 1},
      {source: 'Software Engineering', target: 'Entry Level', value: 1},
      {source: 'Data Science', target: 'Internship', value: 1},
      {source: 'Data Science', target: 'Junior', value: 1},
      {source: 'Data Science', target: 'Mid-level', value: 1},
      {source: 'Data Science', target: 'Senior', value: 1},
      {source: 'Data Science', target: 'Entry Level', value: 1},
      {source: 'Marketing', target: 'Internship', value: 1},
      {source: 'Marketing', target: 'Junior', value: 1},
      {source: 'Marketing', target: 'Mid-level', value: 1},
      {source: 'Marketing', target: 'Senior', value: 1},
      {source: 'Marketing', target: 'Entry Level', value: 1},
      {source: 'Sales', target: 'Internship', value: 1},
      {source: 'Sales', target: 'Junior', value: 1},
      {source: 'Sales', target: 'Mid-level', value: 1},
      {source: 'Sales', target: 'Senior', value: 1},
      {source: 'Sales', target: 'Entry Level', value: 1},
      {source: 'HR', target: 'Internship', value: 1},
      {source: 'HR', target: 'Junior', value: 1},
      {source: 'HR', target: 'Mid-level', value: 1},
      {source: 'HR', target: 'Senior', value: 1},
      {source: 'HR', target: 'Entry Level', value: 1},
      {source: 'Finance', target: 'Internship', value: 1},
      {source: 'Finance', target: 'Junior', value: 1},
      {source: 'Finance', target: 'Mid-level', value: 1},
      {source: 'Finance', target: 'Senior', value: 1},
      {source: 'Finance', target: 'Entry Level', value: 1},
      {source: 'Internship', target: 'Full-time', value: 1},
      {source: 'Internship', target: 'Part-time', value: 1},
      {source: 'Junior', target: 'Full-time', value: 1},
      {source: 'Junior', target: 'Part-time', value: 1},
      {source: 'Mid-level', target: 'Full-time', value: 1},
      {source: 'Mid-level', target: 'Part-time', value: 1},
      {source: 'Senior', target: 'Full-time', value: 1},
      {source: 'Senior', target: 'Part-time', value: 1},
      {source: 'Entry Level', target: 'Full-time', value: 1},
      {source: 'Entry Level', target: 'Part-time', value: 1},
    ]
  };

  useEffect(() => {
    if (!chartRef.current) return;

    // Clear any existing content
    while (chartRef.current.firstChild) {
      chartRef.current.firstChild.remove();
    }

    const options = {
      width: 1200,
      height: 600,
      fontFamily: 'Quicksand, sans-serif',
      fontWeight: 600,
      nodeWidth: 5,
      nodeBorderWidth: 2,
      nodeBorderColor: '#111',
      edgeGradientFill: false,
      enableTooltip: true,
      tooltipId: 'sankey-tooltip-container',
      tooltipTemplate: ({ source, target, value }) => {
        return `
          <div class="bg-white shadow-lg rounded-lg">
            <div class="flex items-center gap-2 p-2">
              <span class="font-medium">${source.title}</span>
              <span>→</span>
              <span class="font-medium">${target.title}</span>
              <span class="text-gray-600">: ${value}</span>
            </div>
          </div>
        `;
      },
      nodeColors: {
        'Applications': '#4299E1',
        'Accepted': '#48BB78',   
        'Rejected': '#F56565',  
        'In Progress': '#ECC94B', 
        'Software Engineering': '#805AD5',
        'Data Science': '#667EEA',   
        'Marketing': '#ED64A6',      
        'Sales': '#9F7AEA',      
        'HR': '#4FD1C5',     
        'Finance': '#38B2AC',      
      },
      canvasStyle: 'background: #ffffff;'
    };

    // Store the chart instance in the ref
    chartInstanceRef.current = new ApexSankey(chartRef.current, options);
    chartInstanceRef.current.render(data);

    // Cleanup function
    return () => {
      if (chartRef.current) {
        while (chartRef.current.firstChild) {
          chartRef.current.firstChild.remove();
        }
      }
      const tooltipContainer = document.getElementById('sankey-tooltip-container');
      if (tooltipContainer) {
        while (tooltipContainer.firstChild) {
          tooltipContainer.firstChild.remove();
        }
      }
      chartInstanceRef.current = null;
    };
  }, []);

  return (
    <div className="relative w-full h-full">
      <div 
        id="svg-sankey" 
        ref={chartRef} 
      />
      <div 
        id="sankey-tooltip-container" 
      />
    </div>
  );
};

export default CustomNodeSankey;