import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import useHttp from "../../hooks/use-http";
import { getAllComments } from "../../lib/api";
import LoadingSpinner from "../UI/LoadingSpinner";

import NewCommentForm from "./NewCommentForm";
import CommentList from "./CommentsList";

import classes from "./Comments.module.css";

const Comments = () => {
	const [isAddingComment, setIsAddingComment] = useState(false);

	const params = useParams();
	const id = params.id;

	const { sendRequest, status, data: loadedComments } = useHttp(getAllComments);

	useEffect(() => {
		sendRequest(id);
	}, [sendRequest, id]);

	const startAddCommentHandler = () => {
		setIsAddingComment(true);
	};

	const addedCommentHandler = () => {};

	let cmt;

	if (status === "pending") {
		cmt = (
			<div className="centered">
				<LoadingSpinner />
			</div>
		);
	}

	if (status === "completed" && loadedComments && loadedComments.length > 0) {
		cmt = <CommentList comments={loadedComments} />;
	}

	if (status === "completed" && (!loadedComments || loadedComments.length === 0)) {
		cmt = <p className="centered">No comments were added yet</p>;
	}

	return (
		<section className={classes.comments}>
			<h2>User Comments</h2>
			{!isAddingComment && (
				<button className="btn" onClick={startAddCommentHandler}>
					Add a Comment
				</button>
			)}
			{isAddingComment && (
				<NewCommentForm id={params.id} onAddedComment={addedCommentHandler} />
			)}
			{cmt}
		</section>
	);
};

export default Comments;
