import * as React from 'react';
import Dropdown from '../../../components/dropdown/Dropdown';
import { ExampleProps, HelpProps, OptionsProps } from '../../../../types/dataTypes';


export const state = {
	example: '',
	option: ''
};

export const Example = ({ coreI18n, i18n, data, onUpdate }: ExampleProps) => {
    const onChange = (value: any) => {
        onUpdate({
            example: value,
            value: value
        });
    };

    const options = [
        { value: '', label: coreI18n.please_select },
        { value: '1-Xxx-Xxx-xxxx', label: i18n.example_1 },
        { value: '(Xxx) Xxx-xxxx', label: i18n.example_2 },
        { value: '(01xxxx) xxxxx|(01xxx) xxxxxx|(01x1) xxx xxxx|(011x) xxx xxxx|(02x) xxxx xxxx|03xx xxx xxxx|055 xxxx xxxx|056 xxxx xxxx|070 xxxx xxxx|07624 xxxxxx|076 xxxx xxxx|07xxx xxxxxx|0800 xxx xxxx|08xx xxx xxxx|09xx xxx xxxx|(016977) xxxx|(01xxx) xxxxx|0500 xxxxxx|0800 xxxxxx|0800 1111|0845 46 4x', label: i18n.uk },
        { value: '0X xx xx xx xx', label: i18n.france },
        { value: '(0X) xxxx xxxx', label: i18n.australia },
        { value: '(0xx) xxxxxxxx|(0xxx) xxxxxxxx|(0xxxx) xxxxxxx|(03xxxx) xxxxxx', label: i18n.germany },
        { value: '0xx-xxx-xxxx', label: i18n.japan },
        { value: '1-Xxx-Xxx-xxxx|Xxx-xxxx', label: i18n.different_formats }
    ];

    return (
        <Dropdown
            value={data.example}
            onChange={(i: any) => onChange(i.value)}
            options={options}
        />
    );
};

export const Options = ({ data, onUpdate }: OptionsProps) => (
	<input
        type="text"
        value={data.value}
        onChange={(e) => onUpdate({ value: e.target.value })}
        style={{ width: '100%' }}
    />
);

export const Help = ({ i18n }: HelpProps) => (
	<>
		<p>
			{i18n.help_text1}
		</p>
		<p>
			{i18n.help_text2}
		</p>
		<p>
			{i18n.help_text3}
		</p>
	</>
);

// var _validate = function(rows) {
// 	var visibleProblemRows = [];
// 	var problemFields      = [];
// 	for (var i=0; i<rows.length; i++) {
// 		if ($("#dtOption_" + rows[i]).val() === "") {
// 			var visibleRowNum = generator.getVisibleRowOrderByRowNum(rows[i]);
// 			visibleProblemRows.push(visibleRowNum);
// 			problemFields.push($("#dtOption_" + rows[i]));
// 		}
// 	}
// 	var errors = [];
// 	if (visibleProblemRows.length) {
// 		errors.push({ els: problemFields, error: LANG.incomplete_fields + " <b>" + visibleProblemRows.join(", ") + "</b>"});
// 	}
// 	return errors;
// };
