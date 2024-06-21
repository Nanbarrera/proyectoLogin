import React from "react";
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import AdfScannerIcon from '@mui/icons-material/AdfScanner';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import AssignmentIcon from '@mui/icons-material/Assignment';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

export const SidebarData = [
    {
        title: "Venta",
        icon: <AttachMoneyIcon />,
        link: "/venta"
    },
    {
        title: "Caja",
        icon: <AdfScannerIcon />,
        link: "/caja"
    },
    {
        title: "Productos",
        icon: <AddCircleIcon />,
        link: "/producto"
    },
    {
        title: "Inventario",
        icon: <AssignmentIcon />,
        link: "/inventario"
    },
    {
        title: "Empleado",
        icon: <AccountCircleIcon />,
        link: "/empleado"
    }
]


