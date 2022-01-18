import React, {Fragment, useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {POST_LOADING_REQUEST} from "../../redux/types";
import {Helmet} from "react-helmet";
import {Row} from "reactstrap";
import {BorderSpinner} from "../../component/spinner/spinner";
import PostCard from "../../component/post/PostCard";

const PostCardList = () => {
    const {posts} = useSelector((state) => state.post)
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch({type:POST_LOADING_REQUEST})
    }, [dispatch])

    return(
      <Fragment>
          <Helmet title="home">
              <Row>
                  {posts ? <PostCard posts={posts}/> : BorderSpinner}
              </Row>
          </Helmet>
      </Fragment>
    );
};

export default PostCardList;