import { Alert } from "flowbite-react";
import { Dropdown } from "flowbite-react";
import Link from "next/link";
import { Navbar } from "flowbite-react";
import { Card } from "flowbite-react";
import { Carousel } from "flowbite-react";
import { Button } from "flowbite-react";

export default function Tailwind() {
  return (
    <div>
      <Alert color="info">Alert!</Alert>
      <Dropdown label="Dropdown button">
        <Dropdown.Item>
          <Link href={"/"}>
            home
          </Link>
        </Dropdown.Item>
        <Dropdown.Item>
          Settings
        </Dropdown.Item>
        <Dropdown.Item>
          Earnings
        </Dropdown.Item>
        <Dropdown.Item>
          Sign out
        </Dropdown.Item>
      </Dropdown>
      <Navbar
        fluid={true}
        rounded={true}
      >
        <Navbar.Brand href="https://flowbite.com/">
          <img
            src="https://flowbite.com/docs/images/logo.svg"
            className="mr-3 h-6 sm:h-9"
            alt="Flowbite Logo"
          />
          <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
            Flowbite
          </span>
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse>
          <Navbar.Link
            href="/navbars"
            active={true}
          >
            Home
          </Navbar.Link>
          <Navbar.Link href="/navbars">
            About
          </Navbar.Link>
          <Navbar.Link href="/navbars">
            Services
          </Navbar.Link>
          <Navbar.Link href="/navbars">
            Pricing
          </Navbar.Link>
          <Navbar.Link href="/navbars">
            Contact
          </Navbar.Link>
        </Navbar.Collapse>
      </Navbar>
      <div className="max-w-sm">
        <Card imgSrc="https://flowbite.com/docs/images/blog/image-1.jpg">
          <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            Noteworthy technology acquisitions 2021
          </h5>
          <p className="font-normal text-gray-700 dark:text-gray-400">
            Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.
          </p>
        </Card>
      </div>
      <div className="h-72">
        <Carousel>
          <Card imgSrc="https://flowbite.com/docs/images/blog/image-1.jpg">
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Noteworthy technology acquisitions 2021
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">
              Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.
            </p>
          </Card>
          <img
            src="https://flowbite.com/docs/images/carousel/carousel-2.svg"
            alt="..."
          />
          <img
            src="https://flowbite.com/docs/images/carousel/carousel-3.svg"
            alt="..."
          />
          <img
            src="https://flowbite.com/docs/images/carousel/carousel-4.svg"
            alt="..."
          />
          <img
            src="https://flowbite.com/docs/images/carousel/carousel-5.svg"
            alt="..."
          />
        </Carousel>
      </div>
      <div className="flex flex-wrap gap-2">
        <div>
          <Button className="bg-gradient-to-r from-blue-800 to-sky-400 hover:from-sky-400 hover:to-blue-800 border-none">
            Info
          </Button>
        </div>
        <div>
          <Button className="bg-gradient-to-r from-blue-800 to-sky-400">
            Success
          </Button>
        </div>
        <div>
          <Button gradientMonochrome="cyan">
            Cyan
          </Button>
        </div>
        <div>
          <Button gradientMonochrome="teal">
            Teal
          </Button>
        </div>
        <div>
          <Button gradientMonochrome="lime">
            Lime
          </Button>
        </div>
        <div>
          <Button gradientMonochrome="failure">
            Failure
          </Button>
        </div>
        <div>
          <Button gradientMonochrome="pink">
            Pink
          </Button>
        </div>
        <div>
          <Button gradientMonochrome="purple">
            Purple
          </Button>
        </div>
      </div>
    </div>
  );
}