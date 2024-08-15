import React, { useState } from 'react';
import { Checkbox, Collapse, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import { ExpandLess, ExpandMore } from '@mui/icons-material';

interface TreeNode {
  id: string;
  name: string;
  children?: TreeNode[];
  hasCheckbox: boolean;
}

const treeData: TreeNode[] = [
  {
    id: '1',
    name: '1 Depth - Item 1',
    hasCheckbox: true,
    children: [
      {
        id: '1-1',
        name: '2 Depth - Item 1-1',
        hasCheckbox: true,
        children: [
          { id: '1-1-1', name: '3 Depth - Item 1-1-1', hasCheckbox: false },
          { id: '1-1-2', name: '3 Depth - Item 1-1-2', hasCheckbox: false },
        ],
      },
      {
        id: '1-2',
        name: '2 Depth - Item 1-2',
        hasCheckbox: true,
        children: [
          { id: '1-2-1', name: '3 Depth - Item 1-2-1', hasCheckbox: false },
        ],
      },
      {
        id: '1-3',
        name: '2 Depth - Item 1-3',
        hasCheckbox: true,
      },
      {
        id: '1-4',
        name: '2 Depth - Item 1-4',
        hasCheckbox: true,
      },
    ],
  },
  {
    id: '2',
    name: '1 Depth - Item 2',
    hasCheckbox: true,
    children: [
      {
        id: '2-1',
        name: '2 Depth - Item 2-1',
        hasCheckbox: true,
        children: [
          { id: '2-1-1', name: '3 Depth - Item 2-1-1', hasCheckbox: false },
        ],
      },
    ],
  },
];

const RecursiveTreeItem = ({ node }: { node: TreeNode }) => {
  const [open, setOpen] = useState(false);

  const handleToggle = () => {
    setOpen(!open);
  };

  return (
    <>
      <ListItem onClick={handleToggle}>
        {node.hasCheckbox && (
          <ListItemIcon>
            <Checkbox />
          </ListItemIcon>
        )}
        <ListItemText primary={node.name} />
        {node.children ? (open ? <ExpandLess /> : <ExpandMore />) : null}
      </ListItem>
      {node.children && (
        <Collapse in={open} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            {node.children.map((child) => (
              <RecursiveTreeItem key={child.id} node={child} />
            ))}
          </List>
        </Collapse>
      )}
    </>
  );
};

const TreeMenu = () => {
  return (
    <List>
      {treeData.map((node) => (
        <RecursiveTreeItem key={node.id} node={node} />
      ))}
    </List>
  );
};

export default TreeMenu;
