import ApexTree from 'apextree';
import React, { useState, useEffect } from 'react';


export const TopToBottomTree = ({ data, options }) => {
    useEffect(() => {
      const tree = new ApexTree(document.getElementById('svg-tree'), options);
      tree.render(data);
  
      return () => {
        const element = document.getElementById('svg-tree');
        if (element) {
          element.innerHTML = '';
        }
      };
    }, [data, options]);
  
    return (
      <div className="chart-container">
        <div id="svg-tree"/>
      </div>
    );
  };