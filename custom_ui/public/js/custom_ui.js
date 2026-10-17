frappe.provide("custom_ui");

custom_ui.setup_wide_layout = function () {
	const is_target_form = () => {
		const route = frappe.get_route ? frappe.get_route() : [];
		if (
			route &&
			route[0] === "Form" &&
			(route[1] === "Purchase Invoice" || route[1] === "Sales Invoice" || route[1] === "Delivery Note")
		) {
			return true;
		}
		if (window.cur_frm && (cur_frm.doctype === "Purchase Invoice" || cur_frm.doctype === "Sales Invoice" || cur_frm.doctype === "Delivery Note")) {
			return true;
		}
		return false;
	};

	const check_and_toggle = () => {
		if (is_target_form()) {
			$(document.body).addClass("custom-wide-items-form full-width");
		} else {
			$(document.body).removeClass("custom-wide-items-form full-width");
		}
	};

	$(document).on("page-change", check_and_toggle);
	if (frappe.router && frappe.router.on) {
		frappe.router.on("change", check_and_toggle);
	}
	check_and_toggle();
};

$(document).ready(function () {
	custom_ui.setup_wide_layout();
});

