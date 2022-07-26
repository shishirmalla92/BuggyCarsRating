class CarModelPage {
	commentSection = '#comment';
	voteBtn = 'Vote!';
	voteSuccessMessage = 'Thank you for your vote!';

	enterComment = (commentValue) => {
		cy.get(this.commentSection).clear().type(commentValue);
	}

	submitVote = () => {
		cy.contains(this.voteBtn).click();
	}

}

export const carModelPage = new CarModelPage();
