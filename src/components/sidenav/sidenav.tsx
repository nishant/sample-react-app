import React, { useState } from 'react';

// Define a recursive TreeNode component
const TreeNode = ({ node }: any) => {
  const [isExpanded, setIsExpanded] = useState(false);
  
  const toggleExpansion = () => {
    setIsExpanded(!isExpanded);
  };
  
  return (
    <div>
      <div onClick={toggleExpansion} style={{ cursor: 'pointer' }}>
        {isExpanded ? '🔽' : '▶️'} {node.name}
      </div>
      {isExpanded && (
        <ul style={{ marginLeft: '20px' }}>
          {node.children.map((child: any) => (
            <li key={child.id}>
              <TreeNode node={child} />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

// Define the Tree component
const Tree = ({ data }: any) => {
  return (
    <div>
      <h2>Tree Component</h2>
      <ul>
        {data.map((node: any) => (
          <li key={node.id}>
            <TreeNode node={node} />
          </li>
        ))}
      </ul>
    </div>
  );
};

// Example usage of the Tree component
const Sidenav = () => {
  const treeData = [
    {
      id: 1,
      name: 'Node 1',
      children: [
        {
          id: 2,
          name: 'Node 1.1',
          children: [],
        },
        {
          id: 3,
          name: 'Node 1.2',
          children: [
            {
              id: 4,
              name: 'Node 1.2.1',
              children: [],
            },
          ],
        },
      ],
    },
    {
      id: 5,
      name: 'Node 2',
      children: [],
    },
  ];
  
  return (
    <div>
      <Tree data={treeData} />
    </div>
  );
};

export default Sidenav;
