import React from 'react';
import {
  MDBFooter,
  MDBContainer,
} from 'mdb-react-ui-kit';

const MyFooter = () => {
    return (
        <MDBFooter className='text-center text-white mt-5' style={{ backgroundColor: '#34393A' }}>
          <MDBContainer className='p-4'></MDBContainer>
    
          <div className='text-center p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
            © 2023 Copyright:
            <a className='text-white' href='https://mdbootstrap.com/'>
              Xuan.nG
            </a>
          </div>
        </MDBFooter>
      );
}

export default MyFooter