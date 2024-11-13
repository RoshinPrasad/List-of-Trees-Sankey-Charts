import React, { useState, useEffect } from 'react';
import './index.css';
import { TopToBottomTree } from './Components/TopToBottomTree';
import { BottomToTopTree } from './Components/BottomToTopTree';
import { LeftToRightTree } from './Components/LeftToRightTree';
import { RightToLeftTree } from './Components/RightToLeftTree';
import { CollapseExpandTree } from './Components/CollapseExpandTree';
import CustomNodeSankey  from './Components/CustomNodeSankey';
import BasicSankey from './Components/BasicSankey';
import EdgeCustomization from './Components/EdgeCustomization';


const Tab = ({ label, isActive, onClick, hasChildren, isExpanded, onExpandClick }) => (
  <button 
    className={`tab-main ${isActive ? 'active' : ''}`}
    onClick={onClick}
  >
    <span>{label}</span>
    {hasChildren && (
      <span 
        className="tab-toggle"
        onClick={(e) => {
          e.stopPropagation();
          onExpandClick();
        }}
      >
        {isExpanded ? '−' : '+'}
      </span>
    )}
  </button>
);

const App = () => {
  const [activeTab, setActiveTab] = useState('tree');
  const [expandedTabs, setExpandedTabs] = useState({
    tree: false,
    sankey: false
  });


  const treeData = {
    id: 'ms',
    data: {
      imageURL: 'https://i.pravatar.cc/300?img=68',
      name: 'Margret Swanson',
    },
    options: {
      nodeBGColor: '#cdb4db',
      nodeBGColorHover: '#cdb4db',
    },
    children: [
      {
        id: 'mh',
        data: {
          imageURL: 'https://i.pravatar.cc/300?img=69',
          name: 'Mark Hudson',
        },
        options: {
          nodeBGColor: '#ffafcc',
          nodeBGColorHover: '#ffafcc',
        },
        children: [
          {
            id: 'kb',
            data: {
              imageURL: 'https://i.pravatar.cc/300?img=65',
              name: 'Karyn Borbas',
            },
            options: {
              nodeBGColor: '#f8ad9d',
              nodeBGColorHover: '#f8ad9d',
            },
          },
          {
            id: 'cr',
            data: {
              imageURL: 'https://i.pravatar.cc/300?img=60',
              name: 'Chris Rup',
            },
            options: {
              nodeBGColor: '#c9cba3',
              nodeBGColorHover: '#c9cba3',
            },
          },
        ],
      },
      {
        id: 'cs',
        data: {
          imageURL: 'https://i.pravatar.cc/300?img=59',
          name: 'Chris Lysek',
        },
        options: {
          nodeBGColor: '#00afb9',
          nodeBGColorHover: '#00afb9',
        },
        children: [
          {
            id: 'Noah_Chandler',
            data: {
              imageURL: 'https://i.pravatar.cc/300?img=57',
              name: 'Noah Chandler',
            },
            options: {
              nodeBGColor: '#84a59d',
              nodeBGColorHover: '#84a59d',
            },
          },
          {
            id: 'Felix_Wagner',
            data: {
              imageURL: 'https://i.pravatar.cc/300?img=52',
              name: 'Felix Wagner',
            },
            options: {
              nodeBGColor: '#0081a7',
              nodeBGColorHover: '#0081a7',
            },
          },
        ],
      },
    ],
  };

  const treeOptions = {
    contentKey: 'data',
    width: 1220,
    height: 630,
    nodeWidth: 200,
    nodeHeight: 80,
    fontColor: '#000',
    borderColor: '#fff',
    childrenSpacing: 50,
    siblingSpacing: 20,
    direction: 'top',
    nodeTemplate: (content) => `
      <div style='display: flex ; gap: 20px;justify-content: center;align-items: center;height: 100%;'>
        <img style='width: 50px;height: 50px;border-radius: 50%;' src='${content.imageURL}' alt='' />
        <div style="font-weight: bold; font-family: Arial; font-size: 14px">${content.name}</div>
      </div>
    `,
    edgeColor: '#BCBCBC',
    edgeColorHover: '#BCBCBC',
    enableToolbar: true,
  };

  const treeOptions1 = {
    contentKey: 'data',
    width: 1220,
    height: 630,
    nodeWidth: 200,
    nodeHeight: 80,
    fontColor: '#000',
    borderColor: '#fff',
    childrenSpacing: 50,
    siblingSpacing: 20,
    direction: 'bottom',
    nodeTemplate: (content) => `
      <div style='display: flex ; gap: 20px;justify-content: center;align-items: center;height: 100%;'>
        <img style='width: 50px;height: 50px;border-radius: 50%;' src='${content.imageURL}' alt='' />
        <div style="font-weight: bold; font-family: Arial; font-size: 14px">${content.name}</div>
      </div>
    `,
    edgeColor: '#BCBCBC',
    edgeColorHover: '#BCBCBC',
    enableToolbar: true,
  };

  const treeOptions2 = {
    contentKey: 'data',
    width: 1220,
    height: 630,
    nodeWidth: 200,
    nodeHeight: 80,
    fontColor: '#000',
    borderColor: '#fff',
    childrenSpacing: 50,
    siblingSpacing: 20,
    direction: 'left',
    nodeTemplate: (content) => `
      <div style='display: flex ; gap: 20px;justify-content: center;align-items: center;height: 100%;'>
        <img style='width: 50px;height: 50px;border-radius: 50%;' src='${content.imageURL}' alt='' />
        <div style="font-weight: bold; font-family: Arial; font-size: 14px">${content.name}</div>
      </div>
    `,
    edgeColor: '#BCBCBC',
    edgeColorHover: '#BCBCBC',
    enableToolbar: true,
  };

  const treeOptions3 = {
    contentKey: 'data',
    width: 1220,
    height: 630,
    nodeWidth: 200,
    nodeHeight: 80,
    fontColor: '#000',
    borderColor: '#fff',
    childrenSpacing: 50,
    siblingSpacing: 20,
    direction: 'right',
    nodeTemplate: (content) => `
      <div style='display: flex ; gap: 20px;justify-content: center;align-items: center;height: 100%;'>
        <img style='width: 50px;height: 50px;border-radius: 50%;' src='${content.imageURL}' alt='' />
        <div style="font-weight: bold; font-family: Arial; font-size: 14px">${content.name}</div>
      </div>
    `,
    edgeColor: '#BCBCBC',
    edgeColorHover: '#BCBCBC',
    enableToolbar: true,
  };

  const treeOptions4 = {
    contentKey: 'data',
    width: 1220,
    height: 630,
    nodeWidth: 200,
    nodeHeight: 80,
    fontColor: '#000',
    borderColor: '#fff',
    childrenSpacing: 50,
    siblingSpacing: 20,
    direction: 'top',
    enableExpandCollapse: true,
    nodeTemplate: (content) => `
      <div style='display: flex ; gap: 20px;justify-content: center;align-items: center;height: 100%;'>
        <img style='width: 50px;height: 50px;border-radius: 50%;' src='${content.imageURL}' alt='' />
        <div style="font-weight: bold; font-family: Arial; font-size: 14px">${content.name}</div>
      </div>
    `,
    edgeColor: '#BCBCBC',
    edgeColorHover: '#BCBCBC',
    enableToolbar: true,
  };

  const toggleExpand = (tab) => {
    setExpandedTabs(prev => ({
      ...prev,
      [tab]: !prev[tab]
    }));
  };

  const mainTabs = [
    {
      id: 'tree',
      label: 'Tree',
      hasChildren: true,
      children: [
        { id: 'top-to-bottom', label: 'Top to Bottom' },
        { id: 'bottom-to-top', label: 'Bottom to Top' },
        { id: 'left-to-right', label: 'Left to Right' },
        { id: 'right-to-left', label: 'Right to Left' },
        { id: 'collapse-expand', label: 'Collapse Expand' },
      ]
    },
    {
      id: 'sankey',
      label: 'Sankey',
      hasChildren: true,
      children: [
        { id: 'basic', label: 'Basic' },
        { id: 'edge-customization', label: 'Edge Customization' },
        { id: 'node-customization', label: 'Node Customization' },
      ]
    }
  ];


  const sampleData = {
    nodes: [
      {
        id: 'Oil',
        title: 'Oil',
      },
      {
        id: 'Natural Gas',
        title: 'Natural Gas',
      },
      {
        id: 'Coal',
        title: 'Coal',
      },
      {
        id: 'Fossil Fuels',
        title: 'Fossil Fuels',
      },
      {
        id: 'Electricity',
        title: 'Electricity',
      },
      {
        id: 'Energy',
        title: 'Energy',
      },
    ],
    edges: [
      {
        source: 'Oil',
        target: 'Fossil Fuels',
        value: 15,
      },
      {
        source: 'Natural Gas',
        target: 'Fossil Fuels',
        value: 20,
      },
      {
        source: 'Coal',
        target: 'Fossil Fuels',
        value: 25,
      },
      {
        source: 'Coal',
        target: 'Electricity',
        value: 25,
      },
      {
        source: 'Fossil Fuels',
        target: 'Energy',
        value: 60,
      },
      {
        source: 'Electricity',
        target: 'Energy',
        value: 25,
      },]
  };

  const customOptions = {
    width: 1000,
    height: 500,
    canvasStyle: 'border: 1px solid #e0e0e0; background: #ffffff;',
    enableTooltip: true,
    onNodeClick: (node) => {
      console.log('Custom node click handler:', node);
    }
  };


  const renderChart = () => {
    switch (activeTab) {
      case 'top-to-bottom':
        return <TopToBottomTree data={treeData} options={treeOptions} />;
      
      case 'bottom-to-top':
        return <BottomToTopTree data={treeData} options={treeOptions1}  />;
      
      case 'left-to-right':
        return <LeftToRightTree data={treeData} options={treeOptions2}  />;

      case 'right-to-left':
        return <RightToLeftTree data={treeData} options={treeOptions3}  />;
      
      case 'collapse-expand':
        return <CollapseExpandTree data={treeData} options={treeOptions4}  />;
      
      case 'basic':
          return <BasicSankey data={sampleData} customOptions={customOptions}/> ;
        
      case 'node-customization':
        return <CustomNodeSankey />;

      case 'edge-customization':
          return <EdgeCustomization />;

      default:
        return  <div className="loading-container">
        <div className="loading-spinner" />
        <span>Select a chart type to Begin</span>
      </div>
    }
  };

  return (
    <div className="app-container">
      <header className="header">
        <h1 className="header-title">Chart Visualization</h1>
      </header>

      <div className="main-content">
        <nav className="sidebar">
          <div className="tab-container">
            {mainTabs.map(tab => (
              <div key={tab.id} className="tab-group">
                <Tab
                  label={tab.label}
                  isActive={activeTab.startsWith(tab.id)}
                  onClick={() => setActiveTab(tab.id)}
                  hasChildren={tab.hasChildren}
                  isExpanded={expandedTabs[tab.id]}
                  onExpandClick={() => toggleExpand(tab.id)}
                />
                
                {expandedTabs[tab.id] && tab.children && (
                  <div className="subtab-container">
                    {tab.children.map(child => (
                      <button
                        key={child.id}
                        className={`subtab ${activeTab === child.id ? 'active' : ''}`}
                        onClick={() => setActiveTab(child.id)}
                      >
                        {child.label}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </nav>

        <main className="visualization-container">
        {renderChart()}
        </main>
      </div>
    </div>
  );
};

export default App;