import {Component} from "react";

import {userService} from "../../services";
import {User} from "../user/User";

class Users extends Component {
    constructor(props) {
        super(props);
        this.state = {users: []}
    }
    componentDidMount() {
        userService.getAll().then(({data}) => this.setState({users:[...data]}))
        userService.getAll().then(({data}) => console.log(data) )
    }

    render() {
        return (
            <div>
                {this.state.users.map(user => <User key={user.id} user={user}/>)}
            </div>
        )
    }
}

export {
    Users
}