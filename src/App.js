import { Container, Col, Row } from "react-bootstrap";
import { Switch, Route } from "react-router-dom";
import FreeComponent from "./FreeComponent";
import AuthComponent from "./AuthComponent";
import Account from "./Account";
import ProtectedRoutes from "./ProtectedRoutes";


function App() {
    return (
        <Container>
            <Row>
                <Col className="text-center">
                    <h1>React Authentication Tutorial</h1>

                    <section id="navigation">
                        <a href="/">Home</a>
                        <a href="/free">Free Component</a>
                        <a href="/auth">Auth Component</a>
                    </section>
                </Col>
            </Row>

            <Switch>
                <Route exact path="/" component={Account} />
                <Route exact path="/free" component={FreeComponent} />
                <ProtectedRoutes path="/auth" component={AuthComponent} />
            </Switch>
        </Container>
    );
}

export default App;