import cxs from 'cxs';
import {useWidgetContext} from 'src/components/widget/hooks/use-widget-context';
import {COLORS} from 'src/components/widget/theme/colors';
import {smallText} from 'src/components/widget/theme/font-sizes';
import {Spacing} from 'src/components/widget/theme/spacing';
import {Routes} from 'src/components/widget/types/routes';

const text = `We are a nonprofit and rely on donations and grants to keep us going.`;
const body = `Reader donations are essential to our work, providing us with the stability and independence we need, so we can focus on showing the data and evidence we think everyone needs to know.`;
const thanks = `Global Change Data Lab and the Our World in Data team`;

const containerCss = cxs({
	...smallText,
	display: 'flex',
	flexDirection: 'column',
	padding: Spacing.Inset_XL,
	' > *:not(:last-child)': {
		marginBottom: Spacing.S
	},
	color: COLORS.Text,
	' > p': {
		margin: Spacing.Empty,
		padding: Spacing.Empty
	}
});

const lastParagraph = cxs({
	color: COLORS.TextOpaque,
	' > span': {
		display: 'block'
	}
});

const actionsContainer = cxs({
	color: COLORS.Primary,
	display: 'flex',
	'& > *:not(:last-child)': {
		marginRight: Spacing.XL
	},
	' > p': {
		margin: 0,
		cursor: 'pointer'
	}
});
type NonprofitInfo = {
	classes: string[];
};
export const NonprofitInfo = ({classes}: NonprofitInfo) => {
	const {setRoute} = useWidgetContext();

	return (
		<div className={[containerCss].concat(classes).join(' ')}>
			<p>{text}</p>
			<p>{body}</p>
			<p className={lastParagraph}>
				<span>Thank you,</span>
				<span>{thanks}</span>
			</p>
			<div className={actionsContainer}>
				<p
					onClick={() => {
						setRoute(Routes.DonationsPolicy);
					}}
				>
					Donations Policy
				</p>
				<p
					onClick={() => {
						setRoute(Routes.FAQ);
					}}
				>
					FAQ
				</p>
			</div>
		</div>
	);
};