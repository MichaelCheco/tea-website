import React from 'react';
import styled from 'styled-components';
const Img = styled.img`
   
`;
const Header = styled.h1`
   
`;
const Div = styled.div`
    
`;
const ContactHeader = styled.h1`
    
`;
const ContactDiv = styled.div`
    width: 30%;
    display: flex;
    flex-direction: column;
    text-align: center;

`;
const ContactWrapper = styled.div`
    display: flex;
`;
const Address = styled.p`
    display: flex;
    flex-direction: column;
    width: 80%;
   margin-left: 30px;
   line-height: 46px;
`;
const Contact = () => (
    <Div>
    <Img src="https://images.unsplash.com/photo-1515696955266-4f67e13219e8?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=5ae1c6269b7d367044d700dfe918eb08&auto=format&fit=crop&w=2102&q=80" />
    <ContactWrapper>
      <ContactDiv>  
      <i class="fas fa-map-marker-alt fa-5x"></i>
        <ContactHeader>Address</ContactHeader>
        <Address><strong>Northern Division Office</strong> 1270 Automation Drive Windsor, CO 80550 <strong>Southern Division Office</strong> 1270 Manual Way Waldorf Ave, MA 05508 </Address>
        </ContactDiv>
        <ContactDiv>
        <i class="fas fa-phone-square fa-5x"></i>
        <ContactHeader>Phone</ContactHeader>
        <Address><strong>24/7 Service Department</strong> 201.250.3670 US Phone Number +1-212-9876543 fax <strong>Northern Division Office</strong> 917.461.0357 EU Phone Number +1-404-37506543 fax</Address>
         </ContactDiv>
         <ContactDiv>
         <i class="far fa-comment-dots fa-5x"></i>
        <ContactHeader>Email</ContactHeader>
        <Address><strong>Corporate Office</strong> CorporateOffice@checo.com <strong>Customer Support</strong> CustomerSupport@checo.com <strong>Feedback</strong> Feedback@checo.com</Address>
    </ContactDiv>
     </ContactWrapper>
    </Div>
)
 
export default Contact;