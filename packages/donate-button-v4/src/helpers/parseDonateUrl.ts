import {DonationFrequency} from 'src/components/widget/types/DonationFrequency';
import {
	AvailablePaymentMethods,
	PaymentMethod
} from 'src/components/widget/types/PaymentMethod';
import {WidgetConfig} from 'src/components/widget/types/WidgetConfig';

const MAX_AMOUNT_SUGGESTIONS = 5;

enum DonateUrlParameters {
	METHOD = 'method',
	FREQUENCY = 'frequency',
	MONTHLY_TITLE = 'monthlyTitle',
	SUGGESTED_AMOUNTS = 'suggestedAmounts'
}

function methodsFromString(string?: string | null) {
	if (!string) return;
	return string
		.split(',')
		.filter((method): method is PaymentMethod =>
			AvailablePaymentMethods.includes(method as PaymentMethod)
		);
}

function frequencyFromString(string?: string | null) {
	if (!string) return;
	return Object.values(DonationFrequency).find(
		(frequency) => frequency.toUpperCase() === string.toUpperCase()
	);
}

function addAmountsFromString(string?: string | null) {
	if (!string) return;
	return string
		.split(',')
		.map(Number.parseFloat)
		.filter(Boolean)
		.slice(0, MAX_AMOUNT_SUGGESTIONS);
}

export function parseDonateUrl(
	urlString: string
): (Partial<WidgetConfig> & {nonprofitSlug: string}) | undefined {
	const url = new URL(urlString);

	const fundraiserSlug = url.pathname.split('/f/')[1];
	const nonprofitSlug = url.pathname.split('/')[1];

	const searchParameters = new URLSearchParams(url.search);
	const methods = methodsFromString(
		searchParameters.get(DonateUrlParameters.METHOD)
	);
	const defaultFrequency = frequencyFromString(
		searchParameters.get(DonateUrlParameters.FREQUENCY)
	);
	const monthlyTitle =
		searchParameters.get(DonateUrlParameters.MONTHLY_TITLE) ?? undefined;

	const addAmounts = addAmountsFromString(
		searchParameters.get(DonateUrlParameters.SUGGESTED_AMOUNTS)
	);
	const lockMonthlyFrequency = defaultFrequency === DonationFrequency.Monthly;

	if (!nonprofitSlug) {
		return;
	}

	return {
		fundraiserSlug,
		nonprofitSlug,
		defaultFrequency,
		methods,
		lockMonthlyFrequency,
		monthlyTitle,
		addAmounts
	};
}