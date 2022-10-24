import { Link } from 'react-router-dom';
import { Card, Navbar, Sidebar } from 'flowbite-react';
import { ChartPieSlice } from 'phosphor-react';

export function Home() {
  return (
    <div className="w-screen h-screen">
      <div className="w-fit">
        <Sidebar aria-label="Sidebar with content separator example">
          <Sidebar.Items>
            <Sidebar.ItemGroup>
              <Sidebar.Item>
                <div className="flex items-center gap-2">
                  <ChartPieSlice />
                  Dashboard
                </div>
              </Sidebar.Item>
              {/* <Sidebar.Item href="#" icon={HiViewBoards}>
                Kanban
              </Sidebar.Item>
              <Sidebar.Item href="#" icon={HiInbox}>
                Inbox
              </Sidebar.Item>
              <Sidebar.Item href="#" icon={HiUser}>
                Users
              </Sidebar.Item>
              <Sidebar.Item href="#" icon={HiShoppingBag}>
                Products
              </Sidebar.Item>
              <Sidebar.Item href="#" icon={HiArrowSmRight}>
                Sign In
              </Sidebar.Item>
              <Sidebar.Item href="#" icon={HiTable}>
                Sign Up
              </Sidebar.Item> */}
            </Sidebar.ItemGroup>
            {/* <Sidebar.ItemGroup>
              <Sidebar.Item href="#" icon={HiChartPie}>
                Upgrade to Pro
              </Sidebar.Item>
              <Sidebar.Item href="#" icon={HiViewBoards}>
                Documentation
              </Sidebar.Item>
              <Sidebar.Item href="#" icon={BiBuoy}>
                Help
              </Sidebar.Item>
            </Sidebar.ItemGroup> */}
          </Sidebar.Items>
        </Sidebar>
      </div>
    </div>
  );
}
