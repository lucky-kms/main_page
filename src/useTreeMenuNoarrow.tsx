import React, { useState } from 'react';
import { Checkbox, Collapse, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';

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

  const handleLabelClick = () => {
    setOpen(!open);
  };

  return (
    <>
      <ListItem>
        {node.hasCheckbox && (
          <ListItemIcon>
            <Checkbox
              // 체크박스 클릭 시에는 메뉴 열림/닫힘 동작하지 않도록 설정
              onClick={(event) => event.stopPropagation()}
            />
          </ListItemIcon>
        )}
        {/* 라벨명 클릭 시에만 메뉴 열림/닫힘 동작 */}
        <ListItemText primary={node.name} onClick={handleLabelClick} />
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
