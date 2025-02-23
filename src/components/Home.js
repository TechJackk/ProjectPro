import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { LayoutGrid, KanbanSquare, CalendarCheck2, BarChart, RefreshCcw, AtSign } from "lucide-react";
import { motion } from "framer-motion";

const features = [
  { icon: LayoutGrid, title: "Dashboard", desc: "Overview of tasks and stats." },
  { icon: KanbanSquare, title: "Kanban Board", desc: "Manage tasks seamlessly." },
  { icon: CalendarCheck2, title: "Sprint Planning", desc: "Organize and assign tasks." },
  { icon: BarChart, title: "Reports", desc: "Track progress and performance." },
  { icon: RefreshCcw, title: "Real-Time Updates", desc: "Stay informed instantly." },
  { icon: AtSign, title: "User Mentions", desc: "Tag teammates with ease." },
];

const Home = () => {
  return (
    <div className="bg-light min-vh-100 min-vw-100 d-flex flex-column align-items-center justify-content-center text-center">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-5"
        >
          <h1 className="fw-bold text-dark">Simplify Your Workflow</h1>
          <p className="text-muted">Manage projects, plan sprints, and track progress effortlessly.</p>
          <Button className="btn btn-primary px-5 py-2 mt-3">Get Started</Button>
        </motion.div>

        <Row className="g-4">
          {features.map((feature, index) => (
            <Col xs={12} sm={6} md={4} key={index}>
              <motion.div whileHover={{ scale: 1.05 }}>
                <Card className="shadow-sm border-0 rounded-4 text-center p-4">
                  <div className="bg-primary text-white rounded-circle d-flex justify-content-center align-items-center mx-auto mb-3" style={{ width: 60, height: 60 }}>
                    <feature.icon size={30} />
                  </div>
                  <Card.Body>
                    <h5 className="fw-semibold">{feature.title}</h5>
                    <p className="text-muted">{feature.desc}</p>
                  </Card.Body>
                </Card>
              </motion.div>
            </Col>
          ))}
        </Row>

        <footer className="mt-5 text-muted">© 2025 Project Manager Pro. All rights reserved.</footer>
      </Container>
    </div>
  );
};

export default Home;
