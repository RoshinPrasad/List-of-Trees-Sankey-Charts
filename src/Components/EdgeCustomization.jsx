import React, { useEffect, useRef } from 'react';
import ApexSankey from 'apexsankey';

const EdgeCustomization = () => {
  const chartRef = useRef(null);
  const chartInstanceRef = useRef(null);

  const data = {
    nodes: [
      {id: 'England', title: 'england'},
      {id: 'Wales', title: 'wales'},
      {id: 'Level 4', title: 'level 4'},
      {id: 'Level 3', title: 'level 3'},
      {id: 'Level 2', title: 'level 2'},
      {id: 'Level 1 and entry level', title: 'level 1 and entry level'},
      {id: 'No qualifications', title: 'no qualifications'},
      {id: 'Other', title: 'other'},
      {id: 'Wholesale & retail', title: 'wholesale & retail'},
      {id: 'Health & social work', title: 'health & social work'},
      {id: 'Education', title: 'education'},
      {id: 'Construction', title: 'construction'},
      {id: 'Manufacturing', title: 'manufacturing'},
      {id: 'Transport & storage', title: 'transport & storage'},
      {id: 'Finance & insurance', title: 'finance & insurance'},
    ],
    edges: [
      {source: 'England', target: 'Level 4', value: 13},
      {source: 'England', target: 'Level 3', value: 8},
      {source: 'England', target: 'Level 2', value: 8},
      {source: 'England', target: 'Level 1 and entry level', value: 6},
      {source: 'England', target: 'No qualifications', value: 3},
      {source: 'Wales', target: 'Level 4', value: 7},
      {source: 'Wales', target: 'Level 3', value: 8},
      {source: 'Wales', target: 'Level 2', value: 4},
      {source: 'Wales', target: 'Level 1 and entry level', value: 5},
      {source: 'Wales', target: 'No qualifications', value: 5},
      {source: 'Level 4', target: 'Wholesale & retail', value: 4},
      {source: 'Level 4', target: 'Health & social work', value: 3},
      {source: 'Level 4', target: 'Education', value: 2},
      {source: 'Level 4', target: 'Construction', value: 1},
      {source: 'Level 4', target: 'Manufacturing', value: 2},
      {source: 'Level 4', target: 'Other', value: 3},
      {source: 'Level 4', target: 'Transport & storage', value: 2},
      {source: 'Level 3', target: 'Wholesale & retail', value: 3},
      {source: 'Level 3', target: 'Health & social work', value: 2},
      {source: 'Level 3', target: 'Education', value: 1},
      {source: 'Level 3', target: 'Construction', value: 2},
      {source: 'Level 3', target: 'Manufacturing', value: 1},
      {source: 'Level 3', target: 'Other', value: 3},
      {source: 'Level 3', target: 'Transport & storage', value: 2},
      {source: 'Level 2', target: 'Wholesale & retail', value: 2},
      {source: 'Level 2', target: 'Health & social work', value: 1},
      {source: 'Level 2', target: 'Education', value: 2},
      {source: 'Level 2', target: 'Construction', value: 1},
      {source: 'Level 2', target: 'Manufacturing', value: 2},
      {source: 'Level 2', target: 'Other', value: 2},
      {source: 'Level 2', target: 'Transport & storage', value: 1},
      {source: 'Level 1 and entry level', target: 'Wholesale & retail', value: 1},
      {source: 'Level 1 and entry level', target: 'Health & social work', value: 2},
      {source: 'Level 1 and entry level', target: 'Education', value: 1},
      {source: 'Level 1 and entry level', target: 'Construction', value: 2},
      {source: 'Level 1 and entry level', target: 'Manufacturing', value: 1},
      {source: 'Level 1 and entry level', target: 'Other', value: 2},
      {source: 'Level 1 and entry level', target: 'Transport & storage', value: 1},
      {source: 'No qualifications', target: 'Wholesale & retail', value: 1},
      {source: 'No qualifications', target: 'Health & social work', value: 1},
      {source: 'No qualifications', target: 'Education', value: 1},
      {source: 'No qualifications', target: 'Construction', value: 1},
      {source: 'No qualifications', target: 'Manufacturing', value: 1},
      {source: 'No qualifications', target: 'Other', value: 1},
      {source: 'No qualifications', target: 'Transport & storage', value: 1},
    ]
  };

  useEffect(() => {
    if (!chartRef.current) return;

    // Clear any existing content
    while (chartRef.current.firstChild) {
      chartRef.current.firstChild.remove();
    }

    const options = {
      nodeWidth: 20,
      fontFamily: 'Quicksand, sans-serif',
      fontWeight: 600,
      edgeOpacity: 0.2,
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
      height: 600,
      width: 1200,
      canvasStyle: 'background: #ffffff;'
    };

    // Store the chart instance in the ref
    chartInstanceRef.current = new ApexSankey(chartRef.current, options);
    chartInstanceRef.current.render(data);

    // Cleanup function
    return () => {
      if (chartRef.current) {
        // Safely remove all child nodes
        while (chartRef.current.firstChild) {
          chartRef.current.firstChild.remove();
        }
      }
      // Clean up the tooltip container
      const tooltipContainer = document.getElementById('sankey-tooltip-container');
      if (tooltipContainer) {
        while (tooltipContainer.firstChild) {
          tooltipContainer.firstChild.remove();
        }
      }
      // Clear the chart instance
      chartInstanceRef.current = null;
    };
  }, []);

  return (
    <div className="relative w-full h-full">
      <div id="svg-sankey" ref={chartRef} className="w-full h-full" />
      <div 
        id="sankey-tooltip-container" 
        className="absolute hidden transform -translate-x-1/2 -translate-y-full pointer-events-none"
      />
    </div>
  );
};

export default EdgeCustomization;