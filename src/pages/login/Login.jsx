import React from "react";
import { Form, Input, Checkbox, Row, Col, Button, Typography, theme } from "antd";
import { useNavigate, Link } from "react-router-dom";
const { Title } = Typography;
const layout = {
  labelCol: {
    span: 6,
  },
  wrapperCol: {
    span: 18,
  },
};
console.log("theme", theme);

const tailLayout = {
  wrapperCol: {
    offset: 0,
    span: 24,
  },
  textAlign: "end",
};

const LoginPage = ({ basepath = "", config }) => {
  const navigate = useNavigate();
  const backgroundImage = "url(" + config.loginBackground + ")";

  const onFinish = (values) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <div style={{ ...styles.loginPage, backgroundImage }}>
      <div style={styles.formContainer}>
        <div style={styles.floatingPanel}>
          <h2>cids Client</h2>
          <h3>Log in </h3>
          ---
        </div>
        <Form
          {...layout}
          name="basic"
          initialValues={{
            remember: true,
          }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
        >
          <Form.Item
            label="Username"
            name="username"
            rules={[
              {
                required: true,
                message: "Please input your username!",
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Password"
            name="password"
            rules={[
              {
                required: true,
                message: "Please input your password!",
              },
            ]}
          >
            <Input.Password />
          </Form.Item>

          <Form.Item {...tailLayout} name="remember" valuePropName="checked">
            <Checkbox>Remember me</Checkbox>
          </Form.Item>

          <Form.Item {...tailLayout}>
            <Row>
              <Col span={24} style={{ textAlign: "center" }}>
                <Button
                  style={{ width: "100%" }}
                  type="primary"
                  block
                  onClick={() => {
                    navigate(basepath + "/");
                  }}
                >
                  Log in
                </Button>
              </Col>
            </Row>
          </Form.Item>
        </Form>
      </div>
      <div style={styles.footer}>
        <div style={styles.copyright}>Copyright © 2021 My App</div>
        <div style={styles.links}>
          <Link to={basepath + "/welcome"} style={styles.link}>
            Terms of Use
          </Link>
          <Link to={basepath + "/"} style={styles.link}>
            Privacy Policy
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
let styles = {
  loginPage: {
    backgroundSize: "cover",
    height: "100vh",
  },
  formContainer: {
    position: "absolute",
    width: "500px",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    backgroundColor: "#ffffffdd",
    opacity: "1",
    padding: "20px",
    borderRadius: "10px",
  },
  floatingPanel: {
    margin: "-60px 16px 28px ",
    padding: "26px",
    textAlign: "center",
    color: "white",
    opacity: "1",
    background: "linear-gradient(195deg, rgb(73, 163, 241), rgb(26, 115, 232))",
    borderRadius: "0.5rem",
    boxShadow:
      "rgb(0 0 0 / 14%) 0rem 0.25rem 1.25rem 0rem, rgb(0 187 212 / 40%) 0rem 0.4375rem 0.625rem -0.3125rem",
  },
  footer: {
    position: "absolute",
    bottom: "10px",
    left: 0,
    right: 0,
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  copyright: {
    color: "white",
    marginLeft: "30px",
  },
  links: {
    color: "white",
    display: "flex",
    justifyContent: "flex-end",
    marginRight: "10px",
  },
  link: {
    color: "white",
    marginRight: "30px",
    textDecoration: "none",
  },
};
