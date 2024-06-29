import React from "react";
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import AdfScannerIcon from '@mui/icons-material/AdfScanner';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import AssignmentIcon from '@mui/icons-material/Assignment';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

export const SidebarData = [
    {
        title: "Ventas",
        icon: <AttachMoneyIcon />,
        link: "/sidebar"
    },
    {
        title: "Caja",
        icon: <AdfScannerIcon />,
<<<<<<< HEAD
        link: "/cajaTotal"
=======
        link: "/cajaVenta"
>>>>>>> 204c98d73c6b0a05ba780fe7df88fe9de77f3ea6
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


