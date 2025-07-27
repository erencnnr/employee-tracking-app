import { useState } from "react";
import { Link } from "react-router-dom";
import {
  LayoutDashboard,
  ChevronDown,
  ChevronRight,
  CircleDot,
} from "lucide-react";

type NavItem = {
  label: string;
  icon?: React.ReactNode;
  path?: string;
  children?: string[];
};

const sections: { title: string; items: NavItem[] }[] = [
  {
    title: "İşe Giriş",
    items: [
      { label: "Yeni Giriş", icon: <LayoutDashboard />, path: "/new-employee" }
    ],
  },
  {
    title: "İşten Çıkış",
    items: [
      { label: "İşten Çıkart", icon: <LayoutDashboard />, path: "/old-employee" }
    ],
  },
];

export default function Sidebar() {
  const [openMenus, setOpenMenus] = useState<Record<string, boolean>>({});

  const toggleMenu = (label: string) => {
    setOpenMenus((prev) => ({ ...prev, [label]: !prev[label] }));
  };

  return (
    <aside className="w-64 h-screen bg-white shadow-sm border-r p-4 space-y-6">
      <div className="text-xl font-bold text-blue-600">Rechain</div>
      {sections.map((section) => (
        <div key={section.title}>
          <p className="text-xs text-gray-500 uppercase mb-2">{section.title}</p>
          <ul className="space-y-1">
            {section.items.map((item) => (
              <li key={item.label}>
                {item.path ? (
                  <Link
                    to={item.path}
                    className="flex items-center gap-2 px-2 py-1.5 text-sm text-gray-700 rounded hover:bg-gray-100"
                  >
                    {item.icon}
                    <span>{item.label}</span>
                  </Link>
                ) : (
                  <button
                    onClick={() => item.children && toggleMenu(item.label)}
                    className="flex items-center justify-between w-full px-2 py-1.5 text-sm text-gray-700 rounded hover:bg-gray-100"
                  >
                    <div className="flex items-center gap-2">
                      {item.icon}
                      <span>{item.label}</span>
                    </div>
                    {item.children && (
                      <>
                        {openMenus[item.label] ? (
                          <ChevronDown className="h-4 w-4" />
                        ) : (
                          <ChevronRight className="h-4 w-4" />
                        )}
                      </>
                    )}
                  </button>
                )}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </aside>
  );
}
