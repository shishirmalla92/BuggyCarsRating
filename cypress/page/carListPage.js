class CarListPage {
	previousPage = '«';
	nextPage = '»';
	firstPageMessage = 'page 1 of 5';
	secondPageMessage = 'page 2 of 5'

	gotoPreviousPage = () => {
		cy.contains(this.previousPage).click();
	}

	gotoNextPage = () => {
		cy.contains(this.nextPage).click();
	}

	selectACar = (carname) => {
		cy.contains(carname).click();
	}
}

export const carListPage = new CarListPage();
