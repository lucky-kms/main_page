import React, { useState } from 'react';
import { Checkbox, Collapse, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';

interface TreeNode {
  id: string;
  name: string;
  children?: TreeNode[];
  hasCheckbox: boolean;
  checked: boolean; // 체크 상태를 저장할 필드 추가
}

const treeData: TreeNode[] = [
  {
    id: '1',
    name: '1 Depth - Item 1',
    hasCheckbox: true,
    checked: false,
    children: [
      {
        id: '1-1',
        name: '2 Depth - Item 1-1',
        hasCheckbox: true,
        checked: false,
        children: [
          { id: '1-1-1', name: '3 Depth - Item 1-1-1', hasCheckbox: false, checked: false },
          { id: '1-1-2', name: '3 Depth - Item 1-1-2', hasCheckbox: false, checked: false },
        ],
      },
      {
        id: '1-2',
        name: '2 Depth - Item 1-2',
        hasCheckbox: true,
        checked: false,
        children: [
          { id: '1-2-1', name: '3 Depth - Item 1-2-1', hasCheckbox: false, checked: false },
        ],
      },
    ],
  },
  {
    id: '2',
    name: '1 Depth - Item 2',
    hasCheckbox: true,
    checked: false,
    children: [
      {
        id: '2-1',
        name: '2 Depth - Item 2-1',
        hasCheckbox: true,
        checked: false,
        children: [
          { id: '2-1-1', name: '3 Depth - Item 2-1-1', hasCheckbox: false, checked: false },
        ],
      },
    ],
  },
];

const RecursiveTreeItem = ({ node, onToggle }: { node: TreeNode; onToggle: (id: string, checked: boolean) => void }) => {
  const [open, setOpen] = useState(false);

  const handleLabelClick = () => {
    setOpen(!open);
  };

  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onToggle(node.id, event.target.checked);
  };

  return (
    <>
      <ListItem>
        {node.hasCheckbox && (
          <ListItemIcon>
            <Checkbox
              checked={node.checked}
              onChange={handleCheckboxChange}
              onClick={(event) => event.stopPropagation()}
            />
          </ListItemIcon>
        )}
        <ListItemText primary={node.name} onClick={handleLabelClick} />
      </ListItem>
      {node.children && (
        <Collapse in={open} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            {node.children.map((child) => (
              <RecursiveTreeItem key={child.id} node={child} onToggle={onToggle} />
            ))}
          </List>
        </Collapse>
      )}
    </>
  );
};

const TreeMenu = () => {
  const [nodes, setNodes] = useState<TreeNode[]>(treeData);

  const updateNodeCheckState = (id: string, checked: boolean, nodes: TreeNode[]): TreeNode[] => {
    return nodes.map((node) => {
      if (node.id === id) {
        node.checked = checked;
        if (node.children) {
          node.children = updateNodeCheckStateForChildren(node.children, checked);
        }
      } else if (node.children) {
        node.children = updateNodeCheckState(id, checked, node.children);
        // 부모 노드의 체크 상태를 자식 노드의 상태에 따라 결정
        const allChildrenChecked = node.children.every((child) => child.checked);
        node.checked = allChildrenChecked;
      }
      return node;
    });
  };

  const updateNodeCheckStateForChildren = (nodes: TreeNode[], checked: boolean): TreeNode[] => {
    return nodes.map((node) => {
      node.checked = checked;
      if (node.children) {
        node.children = updateNodeCheckStateForChildren(node.children, checked);
      }
      return node;
    });
  };

  const handleToggle = (id: string, checked: boolean) => {
    const updatedNodes = updateNodeCheckState(id, checked, nodes);
    setNodes(updatedNodes);
  };

  return (
    <List>
      {nodes.map((node) => (
        <RecursiveTreeItem key={node.id} node={node} onToggle={handleToggle} />
      ))}
    </List>
  );
};

export default TreeMenu;
