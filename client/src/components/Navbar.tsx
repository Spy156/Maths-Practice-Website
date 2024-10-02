import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  DropdownItem,
  DropdownTrigger,
  Dropdown,
  DropdownMenu,
  Avatar,
} from "@nextui-org/react";
import { AcmeLogo } from "./AcmeLogo.jsx";

export default function CustomNavbar() {
  return (
    <Navbar
      maxWidth="full"
      isBlurred
      className="fixed top-0 h-14 bg-transparent flex justify-between items-center"
    >
      <NavbarBrand className="flex items-center">
        <AcmeLogo />
        <p className="font-bold text-inherit text-xl mt-4 text-primary">Maths Practice</p>
      </NavbarBrand>

      <div>
        <NavbarContent
          className="hidden sm:flex gap-4 items-center justify-end"
        >
          <NavbarItem>
            <Link color="foreground" href="/">
              Home
            </Link>
          </NavbarItem>
          <NavbarItem isActive>
            <Link href="/practice" aria-current="page" color="primary">
              Practice
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link color="foreground" href="/about">
              Progress
            </Link>
          </NavbarItem>
          <Dropdown placement="bottom-end">
            <DropdownTrigger>
              <Avatar
                isBordered
                as="button"
                className="transition-transform border-r-full"
                color="secondary"
                name="Jason Hughes"
                size="sm"
                src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
              />
            </DropdownTrigger>
            <DropdownMenu aria-label="Profile Actions" variant="flat" className="p-4">
              <DropdownItem key="profile" className="h-14 gap-2">
                <p className="font-semibold">Signed in as</p>
                <p className="font-semibold">zoey@example.com</p>
              </DropdownItem>
              <DropdownItem key="settings">My Settings</DropdownItem>
              <DropdownItem key="team_settings">Team Settings</DropdownItem>
              <DropdownItem key="analytics">Analytics</DropdownItem>
              <DropdownItem key="system">System</DropdownItem>
              <DropdownItem key="configurations">Configurations</DropdownItem>
              <DropdownItem key="help_and_feedback">Help & Feedback</DropdownItem>
              <DropdownItem key="logout" color="danger">
                Log Out
              </DropdownItem>
            </DropdownMenu>
          </Dropdown>
        </NavbarContent>
      </div>
    </Navbar>
  );
}
