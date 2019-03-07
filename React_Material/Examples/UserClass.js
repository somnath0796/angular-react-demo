import React from 'react';

class userContainer extends React.Component{
    userName = 'Lakshman M N';
    userEmail = 'lakshman@finestCorp.biz'
    render(){
        return(
            <div>
                <p>{this.userName}</p>
                <p>{this.userEmail}</p>
            </div>
        );
    }
}
export default userContainer