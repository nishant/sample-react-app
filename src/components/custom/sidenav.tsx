import React, { useState } from 'react';
import './styles/sidenav.scss';
import {
  ChevronDown,
  ChevronRight,
  FileStack, MessagesSquare,
  PieChart,
  Receipt,
  Settings,
  ShoppingBag,
  UserSquare,
} from 'lucide-react';
const TreeNode = ({ node }: any) => {
  const [isExpanded, setIsExpanded] = useState(false);
  
  const toggleExpansion = () => {
    if (node.children.length > 0) {
      setIsExpanded(!isExpanded);
    }
  };
  
  return (
    <div className="item-container">
      <div className="tree-item" onClick={toggleExpansion}>
        {isExpanded ? <ChevronDown className="reduce-size" /> : <ChevronRight className="reduce-size" />}
        {node.icon} {node.name}
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

const Tree = ({ data }: any) => {
  return (
    <div className="tree-container">
      <h2 className="tree-heading">Voyage</h2>
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

const Sidenav = () => {
  const treeData = [
    {
      id: 1,
      name: 'Dashboard',
      children: [],
      icon: <PieChart className="icon" />
    },
    {
      id: 2,
      name: 'History',
      children: [],
      icon: <ShoppingBag className="icon" />
    },
    {
      id: 3,
      name: 'Customers',
      icon: <UserSquare className="icon" />,
      children: [
        {
          id: 4,
          name: 'Contracts',
          children: [],
          icon: null
        },
        {
          id: 5,
          name: 'Messaging',
          children: [],
          icon: null
        },
        {
          id: 6,
          name: 'Contacts',
          children: [],
          icon: null
        }
      ],
    },
    {
      id: 7,
      name: 'Documents',
      children: [],
      icon: <FileStack className="icon" />
    },
    {
      id: 8,
      name: 'Billing',
      children: [],
      icon: <Receipt className="icon" />
    },
    {
      id: 9,
      name: 'Settings',
      children: [],
      icon: <Settings className="icon" />
    },
    {
      id: 10,
      name: 'Social',
      children: [],
      icon: <MessagesSquare className="icon" />
    },
    
  ];
  
  return (
    <div>
      <Tree data={treeData} />
    </div>
  );
};

export default Sidenav;
