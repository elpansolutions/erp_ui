frappe.provide("custom_ui");

custom_ui.setup_wide_layout = function () {
	const check_and_toggle = () => {
		const route = frappe.get_route ? frappe.get_route() : [];
		if (
			route &&
			route[0] === "Form" &&
			(route[1] === "Purchase Invoice" || route[1] === "Sales Invoice")
		) {
			$(document.body).addClass("custom-wide-items-form");
		} else {
			$(document.body).removeClass("custom-wide-items-form");
		}
	};

	$(document).on("page-change", check_and_toggle);
	check_and_toggle();
};

$(document).ready(function () {
	custom_ui.setup_wide_layout();
});
