const mapStateToProps = (state) => { //Header's mapStateToProps
  const username = state.user.username; 
  return { 
    username
  }
  }

const mapStatetoProps = (state) => {
  const friends = state.user.friends
  return {
    friends
  }
}