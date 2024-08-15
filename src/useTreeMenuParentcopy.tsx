import React, { useState } from 'react';
import { Checkbox, Collapse, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import { styled } from '@mui/system';

interface TreeNode {
  id: string;
  name: string;
  children?: TreeNode[];
  hasCheckbox: boolean;
  checked: boolean;
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

// Styled ListItem for depth-based indentation
const StyledListItem = styled(ListItem)<{ depth: number }>(({ depth }) => ({
  paddingLeft: `${depth * 20}px`, // Depth에 따라 들여쓰기 적용
}));

const RecursiveTreeItem = ({
  node,
  depth = 0,
  onToggle,
}: {
  node: TreeNode;
  depth?: number;
  onToggle: (id: string, checked: boolean) => void;
}) => {
  const [open, setOpen] = useState(false);

  const handleLabelClick = () => {
    setOpen(!open);
  };

  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onToggle(node.id, event.target.checked);
  };

  return (
    <>
      <StyledListItem depth={depth}>
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
      </StyledListItem>
      {node.children && (
        <Collapse in={open} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            {node.children.map((child) => (
              <RecursiveTreeItem
                key={child.id}
                node={child}
                depth={depth + 1} // Depth 증가
                onToggle={onToggle}
              />
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
