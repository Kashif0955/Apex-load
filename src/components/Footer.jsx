import React, { useState } from "react";
import { Layout, Row, Col, Form, Input, Button, Typography, Space } from "antd";
import {
  LinkedinOutlined,
  InstagramOutlined,
  FacebookOutlined,
  TwitterOutlined,
  PhoneOutlined,
  MailOutlined,
  EnvironmentOutlined,
} from "@ant-design/icons";

const { Footer: AntFooter } = Layout; // Ant Design Footer
const { Title, Text } = Typography;

// Rename the Footer component to avoid naming conflict
const CustomFooter = () => {
  const [form] = Form.useForm();
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");

  const sections = [
    {
      title: "Links",
      items: [
        "About Us",
        "Pricing",
        "Log in",
        "Contact Us",
        "FAQs",
        "Privacy Policy",
      ],
    },
    {
      title: "Transporters",
      items: ["Post trucks", "Search for loads"],
    },
    {
      title: "Brokers/ Freight-Forwarders",
      items: ["Post a load", "Search for trucks"],
    },
    {
      title: "Hybrid",
      items: [
        "Post a load",
        "Search for loads",
        "Post truck",
        "Search for trucks",
      ],
    },
    {
      title: "Products",
      items: ["Load board", "TRM", "EAC profile", "Invoice Factoring"],
    },
  ];

  const socialItems = [
    {
      name: "LinkedIn",
      icon: <LinkedinOutlined />,
      link: "https://www.linkedin.com/company/apexloads/mycompany/",
    },
    {
      name: "Instagram",
      icon: <InstagramOutlined />,
      link: "https://www.instagram.com/apexloads/",
    },
    {
      name: "Facebook",
      icon: <FacebookOutlined />,
      link: "https://web.facebook.com/Apexloads/",
    },
    {
      name: "X",
      icon: <TwitterOutlined />,
      link: "https://x.com/apexloads",
    },
  ];

  const handleSubmit = (values) => {
    const { name, phone } = values;
    const subject = encodeURIComponent("Support Request from Website");
    const body = encodeURIComponent(`Name: ${name}\nPhone: ${phone}`);
    window.location.href = `mailto:tacjohnrobin@gmail.com?subject=${subject}&body=${body}`;
  };

  const createSectionLink = (item) => {
    // Add your link mapping logic here
  };

  return (
    <AntFooter style={{ backgroundColor: '#171715', color: 'white', fontFamily: 'sans-serif', padding: '40px 0' }}>
      <div className="container mx-auto px-4">
        <Row gutter={[16, 16]}>
          {/* Logo and Support Form */}
          <Col xs={24} md={8} style={{ textAlign: 'left' }}>
            <img src="src/assets/images/logo.svg" alt="Apex Loads Logo" width={200} /> <br />
            <Text type="secondary" style={{ color: '#BFBFBF', fontSize: '14px', lineHeight: '1.5',fontWeight:"600" }}>
              Apexloads is an online load board that connects cargo owners with
              transporters to streamline the freight-truck matching process and
              facilitate faster payments.
            </Text>
            <div>
              <Title level={4} style={{ color: 'white', margin: '20px 0 10px' }}>Seeking personalized support?</Title>
              <Text type="secondary" style={{ color: '#BFBFBF' }}>Request a call from our team</Text>
              <Form form={form} onFinish={handleSubmit} layout="vertical" style={{ marginTop: '20px' }}>
                <Form.Item
                  name="name"
                  rules={[{ required: true, message: "Please enter your name!" }]}
                >
                  <Input
                    placeholder="Your Name"
                    onChange={(e) => setName(e.target.value)}
                    style={{ color: 'white', backgroundColor: '#333', border: 'none', borderRadius: '4px', padding: '10px' }} 
                  />
                </Form.Item>
                <Form.Item
                  name="phone"
                  rules={[{ required: true, message: "Please enter your phone!" }]}
                >
                  <Input
                    placeholder="Phone Number"
                    onChange={(e) => setPhone(e.target.value)}
                    style={{ color: 'white', backgroundColor: '#333', border: 'none', borderRadius: '4px', padding: '10px' }} 
                  />
                </Form.Item>
                <Button type="primary" htmlType="submit" block style={{ backgroundColor: '#D91E27', border: 'none' }}>
                  Send a Request
                </Button>
              </Form>
            </div>
          </Col>

          {/* Links Sections */}
          {sections.map((section, index) => (
            <Col xs={12} md={4} key={index}>
              <Title level={5} style={{ color: 'white', marginBottom: '10px' }}>
                {section.title}
              </Title>
              <ul style={{ listStyleType: 'none', padding: 0 }}>
                {section.items.map((item, i) => (
                  <li key={i}>
                    <a
                      href={createSectionLink(item)}
                      style={{ color: '#BFBFBF', textDecoration: 'none' }} 
                      onMouseOver={(e) => (e.currentTarget.style.color = 'white')}
                      onMouseOut={(e) => (e.currentTarget.style.color = '#BFBFBF')}
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </Col>
          ))}
        </Row>

        {/* Contact Information */}
        <Row gutter={[16, 16]} style={{ marginTop: '40px' }}>
          <Col xs={24} md={8}>
            <Space>
              <PhoneOutlined style={{ fontSize: "20px", color: "#D91E27" }} />
              <Text style={{ color: 'white' }}>+254 (0) 709 677 400</Text>
            </Space>
          </Col>
          <Col xs={24} md={8}>
            <Space>
              <MailOutlined style={{ fontSize: "20px", color: "#D91E27" }} />
              <Text style={{ color: 'white' }}>info@apexloads.com</Text>
            </Space>
          </Col>
          <Col xs={24} md={8}>
            <Space>
              <EnvironmentOutlined style={{ fontSize: "20px", color: "#D91E27" }} />
              <Text style={{ color: 'white' }}>
                Gill House, 1st floor, Room 5A, Moi Avenue, Nairobi, Kenya
              </Text>
            </Space>
          </Col>
        </Row>

        {/* Social Icons */}
        <Row justify="center" style={{ marginTop: '30px', paddingTop: '20px', borderTop: '1px solid #333' }}>
          <Space size="large">
            {socialItems.map((item, index) => (
              <a
                key={index}
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: '#BFBFBF', fontSize: '20px' }} // Light gray for social icons
                onMouseOver={(e) => (e.currentTarget.style.color = 'white')}
                onMouseOut={(e) => (e.currentTarget.style.color = '#BFBFBF')}
              >
                {item.icon}
              </a>
            ))}
          </Space>
        </Row>

        {/* Footer Bottom */}
        <Row justify="center" style={{ marginTop: '20px', color: '#BFBFBF' }}>
          <Text style={{ color: 'white' }}>© 2024 — Copyright</Text>
          <Text style={{ color: 'white' }}>
            <a
              href="/terms-and-conditions"
              style={{ color: '#BFBFBF', textDecoration: 'none', marginLeft: '5px' }}
              onMouseOver={(e) => (e.currentTarget.style.color = 'white')}
              onMouseOut={(e) => (e.currentTarget.style.color = '#BFBFBF')}
            >
              {" Terms and Conditions "}
            </a>
            apply
          </Text>
        </Row>
      </div>
    </AntFooter>
  );
};

export default CustomFooter;
