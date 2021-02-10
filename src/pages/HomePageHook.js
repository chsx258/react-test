import React from "react";
import { useEffect } from "react";
import { connect } from "react-redux";
import Button from "@material-ui/core/Button";
import {useHistory} from "react-router-dom";


const HomePage = (props) => {
  useEffect(() => {}, []);
  const history = useHistory();
  return <div>Hello
    <Button
            fullWidth
            variant="contained"
            color="primary"
            onClick = {()=>{
              history.push('/login')
            }}
          >
            Sign out
          </Button>
  </div>;
};

const mapStateToProps = (state) => ({
  // value: state.value,
});

const mapDispatchToProps = (dispatch) => ({
  // fn: ()=> dispatch(fn()),
});

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
