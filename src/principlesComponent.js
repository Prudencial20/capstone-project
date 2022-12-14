// import Card from 'react-bootstrap/Card';
import Bridge from './Images/taxs.jpg';
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import Image from 'react-bootstrap/Image';

const PrinciplesComponent = () => {
    return (
        <div className='principles-page '>
            <Row className='container-fluid mt-3 mb-3' xs={1} md={2} lg={2}>
                <Col >
                        <div className='p-3'>
                            <Image src={Bridge} width="200px" />
                        </div>

                </Col>
                {/* <Col xs={12} md={4} lg={3}> */}
                        
               
                {/* </Col> */}
                <Col >
                <div className='principles-text'>
                        <h3 className='principle-title'>
                            OUR PRINCIPLES
                        </h3>
                        
                
                   
                        
                    <ul>
                        <li>
                            Accountability -  Biz-tax pays your taxes on time, everytime <br /> with no need to worry about penalties or interest <br />
                            while you continue to run your business.

                        </li>
                        <li>
                            Trust - trust us to handle the tough stuff so you can <br /> take care of what matters.
                        </li>
                        <li>
                         Efficiency - knowing that when we bring up the data <br /> for your taxeswe'll have the necessary information <br /> for everything
                         you need to know at one glance.
                        </li>
                        <li>
                            Simplicity - it's easy and simple to use even if you're <br /> not a regular user of technology 
                        </li>
                        <li>
                            Innovation - making life easier by finding new ways to make things work better
        
                        </li>
                    </ul>
                        



                    </div>
                </Col>
                
            </Row>
        </div>
    );
}

export default PrinciplesComponent;