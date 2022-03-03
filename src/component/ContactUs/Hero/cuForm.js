import React, { Component } from 'react';
import * as Yup from 'yup';
import { Form, Field, Formik } from 'formik';
import window from 'global';

import { errorArr } from './../../Utils/cuFormData';
import { cuFormPost } from './../../../service/cuForm';
import './../../../scss/contact_us/hero/cuForm.scss';

import {
    fields
} from './../../Utils/cuFormDataRef';

let validateSchema = Yup.object().shape(
    {
        Topic__c: Yup.lazy(value => {

            if (value !== undefined) {

                return Yup
                    .mixed()
                    .when(
                        [
                            '$errorConf'
                        ],
                        (errorConf, schema) => {

                            return schema
                                .required()
                                .notOneOf(['0', ''], errorConf['Topic__c'])
                        }
                    )

            } else {

                return Yup.mixed().notRequired()
            }
        }),
        Address_one__c: Yup.lazy(value => {

            if (value !== undefined) {

                return Yup.string().when(
                    [
                        'Topic__c',
                        '$additionalFormFieldsOptions',
                        '$errorConf'
                    ],
                    (Topic__c_val, additionalFieldsOptions, errorConf, schema) => {

                        if (additionalFieldsOptions.indexOf(Topic__c_val) === -1) {

                            return schema.notRequired()
                        } else {

                            return schema
                                .required(errorConf['Address_one__c']);
                        }

                    })

            } else {
                return Yup.mixed().notRequired()
            }
        }),
        City__c: Yup.lazy(value => {

            if (value !== undefined) {

                return Yup.string().when(
                    [
                        'Topic__c',
                        '$additionalFormFieldsOptions',
                        '$errorConf'
                    ],
                    (Topic__c_val, additionalFieldsOptions, errorConf, schema) => {

                        if (additionalFieldsOptions.indexOf(Topic__c_val) === -1) {

                            return schema.notRequired()
                        } else {

                            return schema
                                .required(errorConf['City__c']);
                        }
                    })

            } else {
                return Yup.mixed().notRequired()
            }
        }),
        State__c: Yup.lazy(value => {

            if (value !== undefined) {

                return Yup.string().when(
                    [
                        'Topic__c',
                        '$additionalFormFieldsOptions',
                        '$errorConf'
                    ],
                    (Topic__c_val, additionalFieldsOptions, errorConf, schema) => {

                        if (additionalFieldsOptions.indexOf(Topic__c_val) === -1) {

                            return schema.notRequired()
                        } else {
                            return schema
                                .required()
                                .notOneOf(['0', ''], errorConf['State__c'])
                        }
                    })

            } else {
                return Yup.mixed().notRequired()
            }
        }),
        Zipcode__c: Yup.lazy(value => {

            if (value !== undefined) {

                return Yup.string().when(
                    [
                        'Topic__c',
                        '$additionalFormFieldsOptions',
                        '$zip_code_lower_len',
                        '$zip_code_upper_len',
                        '$errorConf'
                    ],
                    (
                        Topic__c_val,
                        additionalFieldsOptions,
                        ZIP_CODE_LOWER_LEN,
                        ZIP_CODE_UPPER_LEN,
                        errorConf,
                        schema
                    ) => {

                        if (additionalFieldsOptions.indexOf(Topic__c_val) === -1) {

                            return schema.notRequired()
                        } else {

                            return schema.test('Zipcode__c', errorConf['Zipcode__c'], (value) => {

                                if (!value) {

                                    return false;
                                }

                                if (value.length === ZIP_CODE_LOWER_LEN) {

                                    return true;
                                }

                                if (
                                    value.length < ZIP_CODE_LOWER_LEN
                                    || value.indexOf('-') == -1
                                    || value.charAt(ZIP_CODE_LOWER_LEN) !== '-'
                                    || value.length !== ZIP_CODE_UPPER_LEN
                                ) {

                                    return false;
                                }

                                return true
                            })
                        }
                    })

            } else {
                return Yup.mixed().notRequired()
            }
        }),
        First_Name__c: Yup.lazy(value => {

            if (value !== undefined) {

                return Yup.string().when(
                    [
                        '$errorConf'
                    ],
                    (errorConf, schema) => {

                        return schema
                            .required(errorConf['First_Name__c']);
                    });

            } else {
                return Yup.mixed().notRequired()
            }
        }),
        Last_Name__c: Yup.lazy(value => {

            if (value !== undefined) {

                return Yup.string().when(
                    [
                        '$errorConf'
                    ],
                    (errorConf, schema) => {

                        return schema.required(errorConf['Last_Name__c']);
                    });
            } else {

                return Yup.mixed().notRequired()
            }
        }),
        Email_Address__c: Yup.lazy(value => {

            if (value !== undefined) {

                return Yup.string().when(
                    [
                        '$errorConf'
                    ],
                    (errorConf, schema) => {

                        return schema
                            .required(errorConf['Email_Address__c'])
                            .email(errorConf['Email_Address__c_valid']);
                    });

            } else {

                return Yup.mixed().notRequired()
            }
        }),
        Phone__c: Yup.lazy(value => {

            if (value !== undefined) {

                return Yup.string().when(
                    [
                        '$errorConf'
                    ],
                    (errorConf, schema) => {

                        return schema.test('Phone__c', 'Invalid Phone Number. Number must be 10 digit number or in the format (XXX) XXX-XXXX', (value) => {

                            if (!value) {

                                return true;
                            }

                            if (/^\s*\(\s*[0-9]{3}\s*\)\s*[0-9]{3}\s*\-\s*[0-9]{4}\s*$/.test(value)
                                || /^[0-9]{10}$/.test(value)
                            ) {

                                return true;
                            }

                            return false;
                        })
                    });

            } else {

                return Yup.mixed().notRequired()
            }
        }),
        Comment__c: Yup.lazy(value => {

            if (value !== undefined) {

                return Yup.string().when(
                    [
                        '$errorConf'
                    ],
                    (errorConf, schema) => {

                        return schema
                            .required(errorConf['Comment__c']);

                    });

            } else {

                return Yup.mixed().notRequired()
            }
        })
    }
);

class CuForm extends Component {

    constructor(props) {

        super(props);

        const { sitecore: { route: { fields: { AdditionalFormFields: additionalFormFieldsRef } } } } = fields;
        const { sitecore: { route: { fields: { SelectaTopic: selectaTopicRef } } } } = fields;
        const { sitecore: { route: { fields: { Role: roleRef } } } } = fields;
        const { sitecore: { route: { fields: { State: stateRef } } } } = fields;
        const { sitecore: { route: { fields: { ErrorMessagesListValues: errorRef } } } } = fields;

        this.state = {
            additionalFormFieldsRef,
            selectaTopicRef,
            roleRef,
            stateRef,
            errorRef
        }

        this.getFieldErrorStatus = this.getFieldErrorStatus.bind(this);
        this.displayLoader = this.displayLoader.bind(this);
        this.addAnimationTimeline = this.addAnimationTimeline.bind(this);
        this.getLabelAnimation = this.getLabelAnimation.bind(this);
        this.playAnimationForward = this.playAnimationForward.bind(this);
        this.playAnimationReverse = this.playAnimationReverse.bind(this);
        this.formFieldsCntr = this.formFieldsCntr.bind(this);
    }

    componentDidMount() {

        const { additionalFormFieldsRef, selectaTopicRef, roleRef, stateRef, errorRef } = this.state;

        let stateNewProp = {
            zip_code_lower_len: 5,
            zip_code_upper_len: 10,
            additionalFormFieldsConf: [],
            selectaTopicConf: {},
            roleConf: {},
            stateConf: {},
            errConf: {}
        };

        if (typeof additionalFormFieldsRef !== 'undefined'
            && Array.isArray(additionalFormFieldsRef)
            && additionalFormFieldsRef.length > 0) {

            let additionalFormFieldsConf = additionalFormFieldsRef
                .reduce((finalArr, item) => {

                    finalArr.push(item.fields.Value.value);

                    return finalArr
                }, [])

            stateNewProp = { ...stateNewProp, additionalFormFieldsConf }
        }

        if (typeof selectaTopicRef !== 'undefined'
            && Array.isArray(selectaTopicRef)
            && selectaTopicRef.length > 0) {

            let selectaTopicConf = selectaTopicRef
                .reduce((finalObj, item) => {

                    finalObj[item.fields.Value.value] = item.fields.Name.value;

                    return finalObj
                }, {})

            stateNewProp = { ...stateNewProp, selectaTopicConf }
        }

        if (typeof roleRef !== 'undefined'
            && Array.isArray(roleRef)
            && roleRef.length > 0) {

            let roleConf = roleRef
                .reduce((finalObj, item) => {

                    finalObj[item.fields.Value.value] = item.fields.Name.value;

                    return finalObj
                }, {})

            stateNewProp = { ...stateNewProp, roleConf }
        }

        if (typeof stateRef !== 'undefined'
            && Array.isArray(stateRef)
            && stateRef.length > 0) {

            let stateConf = stateRef
                .reduce((finalObj, item) => {

                    finalObj[item.fields.Name.value] = item.fields.Value.value;

                    return finalObj
                }, {})

            stateNewProp = { ...stateNewProp, stateConf }
        }

        if (typeof errorRef !== 'undefined'
            && Array.isArray(errorRef)
            && errorRef.length > 0) {

            let errorConf = errorRef
                .reduce((finalObj, item) => {

                    finalObj[item.fields.Name.value] = item.fields.Value.value;

                    return finalObj
                }, {})

            stateNewProp = { ...stateNewProp, errorConf }
        }

        this.setState((state) => {
            return { ...state, ...stateNewProp }
        });

        this.formFieldsCntr(".form-fields-sub-cntr-common");

    }

    formFieldsCntr = (cntrSelector) => {

        let containers = document.querySelectorAll(cntrSelector);

        for (let i = 0; i < containers.length; i++) {
            this.addAnimationTimeline(containers[i]);
        }
    }
    getLabelAnimation = (inputType, labelRef) => {

        switch (inputType) {

            case 'textarea': return window
                .gsap
                .to(labelRef,
                    0.18,
                    {
                        paused: true,
                        color: "#000000",
                        scale: 0.75,
                        opacity: 0.3,
                        yPercent: -32,
                        xPercent: -10
                    });
            default: return window
                .gsap
                .to(
                    labelRef,
                    0.18,
                    {
                        paused: true,
                        color: "#000000",
                        scale: 0.75,
                        opacity: 0.3,
                        yPercent: -100,
                        xPercent: -10
                    });
        }
    }

    playAnimationForward = (event, labelAnimationRef) => {

        labelAnimationRef.play();
    }

    playAnimationReverse = (e, labelAnimationRef) => {

        let eventref = e;

        if (
            eventref.target.type.toLowerCase().includes('select')
            && (
                eventref.target.value == '0'
                || eventref.target.value == ''
            )
        ) {

            labelAnimationRef.reverse();
        } else if (!eventref.target.value) {

            labelAnimationRef.reverse();
        }
    }

    addAnimationTimeline = (container) => {

        let input = container.querySelector(".form-fields-common");
        let label = container.querySelector(".label-elm-common");
        console.log(input.type);
        let labelAnimation = this.getLabelAnimation(input.type, label);

        input.removeEventListener(
            "focus",
            (event) => {
                this.playAnimationForward(event, labelAnimation)
            },
            true
        );

        input.removeEventListener(
            "blur",
            (event) => {
                this.playAnimationReverse(event, labelAnimation)
            },
            true
        );

        input.addEventListener(
            "focus",
            (event) => {
                this.playAnimationForward(event, labelAnimation)
            }
        );

        input.addEventListener(
            "blur",
            (event) => {
                this.playAnimationReverse(event, labelAnimation)
            }
        );
    }

    getFieldErrorStatus = (tempPropsParam, fieldName) => {

        const tempProp = tempPropsParam;

        const { touched, errors } = tempProp

        return (touched && touched[fieldName]) && (errors && errors[fieldName])
    }

    displayLoader = () => {

        return (
            <div id="loading-animation"
                style={
                    {
                        backgroundColor: '#C7C7C7',
                        zIndex: 9999,
                        position: 'fixed',
                        top: 0,
                        right: 0,
                        bottom: 0,
                        left: 0,
                        opacity: 0.5
                    }
                }
            >
                <div class="circles m-auto"></div>
            </div>
        )
    }

    render() {

        const {
            additionalFormFieldsConf,
            selectaTopicConf,
            roleConf,
            errorConf,
            stateConf,
            zip_code_lower_len,
            zip_code_upper_len
        } = this.state;

        const { toggelHeroCV } = this.props;

        return (
            <div className='cu-form--cntr'>

                <Formik
                    initialValues={{
                        Topic__c: '0',
                        Ordernumber: '',
                        Address_one__c: '',
                        City__c: '',
                        State__c: '0',
                        Zipcode__c: '',
                        Buyer: '',
                        Seller: '',
                        First_Name__c: '',
                        Last_Name__c: '',
                        Company_Name__c: '',
                        Email_Address__c: '',
                        Phone__c: '',
                        Job_Function__c: '0',
                        Comment__c: ''
                    }}
                    validate={(values) => {

                        return validateSchema.validate(
                            values,
                            {
                                abortEarly: false,
                                context: {
                                    additionalFormFieldsOptions: typeof additionalFormFieldsConf !== 'undefined'
                                        ? additionalFormFieldsConf
                                        : [],
                                    zip_code_lower_len,
                                    zip_code_upper_len,
                                    errorConf
                                }
                            }
                        ).then((res) => {

                            return {}
                        })
                            .catch((err) => {

                                const validationErrorArrDef = JSON.parse(JSON.stringify(err.inner));

                                const finalErrObj = validationErrorArrDef.reduce(
                                    (tempErrArr, fieldErr) => {

                                        tempErrArr[fieldErr['path']] = fieldErr['message'];

                                        return tempErrArr
                                    }, {})

                                return finalErrObj
                            });

                    }}
                    onSubmit={(values, { resetForm, setErrors, setSubmitting }) => {

                        setSubmitting(true);

                        cuFormPost(values)
                            .then((res) => {


                                if (res.data.status === 'success') {

                                    resetForm();
                                    setErrors({ submitFailed: false });
                                    toggelHeroCV(false);
                                } else if (res.data.status === 'failure') {

                                    setErrors({ submitFailed: true });
                                }
                            })
                            .catch((err) => {

                                setErrors({ submitFailed: true });
                                resetForm();
                            })
                            .finally(() => {

                                setSubmitting(false);
                            });
                    }}
                >
                    {
                        (props) => {

                            const { values, errors, isSubmitting } = props;

                            return (

                                <Form>
                                    <div className='child-a-cfc'>
                                        Contact us by form, email or phone
                                        </div>
                                    {
                                        errors
                                        && errors.submitFailed
                                        && errors.submitFailed === true
                                        && (
                                            <div className='field_error_msg_common'>
                                                Something went wrong, please try after some time.
                                            </div>
                                        )
                                    }
                                    <div className='child-b-cfc'>
                                        <span className='cb-required-cfc'>*</span> indicates a required field
                                    </div>

                                    <div className='form-fields-cntr-common form-elm-a--cntr'>

                                        <div className='form-fields-sub-cntr-common'>
                                            <label
                                                htmlFor="Topic__c"
                                                className='label-elm-common label-elm-a'
                                            >
                                                Select a Topic*
                                            </label>

                                            <Field name="Topic__c"
                                            >
                                                {
                                                    (
                                                        {
                                                            field,
                                                            form,
                                                            meta
                                                        }
                                                    ) => (
                                                        <>
                                                            <select
                                                                {...field}
                                                                className={
                                                                    "form-fields-common form-elm-a form-elem-select-common" +
                                                                    (
                                                                        this.getFieldErrorStatus(form, 'Topic__c')
                                                                            ? " form-fields-err-common"
                                                                            : ""
                                                                    )
                                                                    +
                                                                    (
                                                                        meta.value == 0
                                                                            ? ' form-elm-select'
                                                                            : ''
                                                                    )
                                                                }

                                                                onBlur={e => {

                                                                    let selTp = e.target.value;

                                                                    if (Array.isArray(this.state.additionalFormFieldsConf)
                                                                        && this.state.additionalFormFieldsConf.length > 0
                                                                        && this.state.additionalFormFieldsConf.indexOf(selTp) !== -1
                                                                    ) {

                                                                        this.formFieldsCntr('.form-add-fields-sub-cntr-common');
                                                                    }
                                                                }}


                                                            >
                                                                <option className="fx-font-arial" value="0"></option>
                                                                {
                                                                    typeof selectaTopicConf !== 'undefined'
                                                                    && Object.keys(selectaTopicConf).length > 0
                                                                    && (
                                                                        Object.keys(selectaTopicConf)
                                                                            .map(
                                                                                (optionKey, idx) =>
                                                                                (
                                                                                    <option
                                                                                    className="fx-font-arial"
                                                                                        key={`select_a_topic_${idx}`}
                                                                                        value={`${optionKey}`}
                                                                                    >
                                                                                        {
                                                                                            `${selectaTopicConf[optionKey]}`
                                                                                        }
                                                                                    </option>
                                                                                )
                                                                            )
                                                                    )
                                                                }
                                                            </select>
                                                        </>
                                                    )
                                                }
                                            </Field>
                                        </div>
                                        {
                                            this.getFieldErrorStatus(props, 'Topic__c') &&
                                            (
                                                <div className='field_error_msg_common'>
                                                    {
                                                        errors.Topic__c
                                                    }
                                                </div>
                                            )
                                        }
                                    </div>
                                    {
                                        values
                                        && values.Topic__c
                                        && typeof additionalFormFieldsConf !== 'undefined'
                                        && Array.isArray(additionalFormFieldsConf)
                                        && additionalFormFieldsConf.length > 0
                                        && additionalFormFieldsConf.indexOf(values.Topic__c) != -1 &&
                                        (
                                            <>
                                                <div className='child-c-cfc'>
                                                    Please provide some more information about your order:
                                                </div>

                                                <div className='form-fields-cntr-common form-elm-a1--cntr'>
                                                    <div className='form-add-fields-sub-cntr-common'>
                                                        <label
                                                            htmlFor="Ordernumber"
                                                            className='label-elm-common label-elm-a1'
                                                        >
                                                            Order number
                                                        </label>
                                                        <Field
                                                            type="text"
                                                            name="Ordernumber"
                                                            autoComplete="off"
                                                            className='form-fields-common form-elm-a1'
                                                        />
                                                    </div>
                                                </div>

                                                <div className='form-fields-cntr-common form-elm-a2--cntr'>

                                                    <div className='form-add-fields-sub-cntr-common'>
                                                        <label
                                                            htmlFor="Address_one__c"
                                                            className='label-elm-common label-elm-a2'
                                                        >
                                                            Address*
                                                        </label>
                                                        <Field
                                                            type="text"
                                                            name="Address_one__c"
                                                            autoComplete="off"
                                                            className={
                                                                "form-fields-common form-elm-a2" +
                                                                (
                                                                    this.getFieldErrorStatus(props, 'Address_one__c')
                                                                        ? " form-fields-err-common"
                                                                        : ""
                                                                )
                                                            }
                                                        />
                                                    </div>
                                                    {
                                                        this.getFieldErrorStatus(props, 'Address_one__c') &&
                                                        (
                                                            <div className='field_error_msg_common'>
                                                                {
                                                                    errors.Address_one__c
                                                                }
                                                            </div>
                                                        )
                                                    }
                                                </div>

                                                <div className='form-fields-cntr-common form-elm-a3--cntr'>

                                                    <div className='form-add-fields-sub-cntr-common'>
                                                        <label
                                                            htmlFor="City__c"
                                                            className='label-elm-common label-elm-a3'
                                                        >
                                                            City*
                                                        </label>
                                                        <Field
                                                            type="text"
                                                            name="City__c"
                                                            autoComplete="off"
                                                            className={
                                                                "form-fields-common form-elm-a3" +
                                                                (
                                                                    this.getFieldErrorStatus(props, 'City__c')
                                                                        ? " form-fields-err-common"
                                                                        : ""
                                                                )
                                                            }
                                                        />
                                                    </div>
                                                    {
                                                        this.getFieldErrorStatus(props, 'City__c') &&
                                                        (
                                                            <div className='field_error_msg_common'>
                                                                {
                                                                    errors.City__c
                                                                }
                                                            </div>
                                                        )
                                                    }
                                                </div>

                                                <div className='form-fields-cntr-common form-elm-a4--cntr'>
                                                    <div className='form-add-fields-sub-cntr-common'>
                                                        <label
                                                            htmlFor="State__c"
                                                            className='label-elm-common label-elm-a4'
                                                        >
                                                            State*
                                                        </label>
                                                        <Field
                                                            component="select"
                                                            name="State__c"
                                                            className={
                                                                "form-fields-common form-elm-a4"
                                                                +
                                                                (
                                                                    values.State__c == 0
                                                                        ? ' form-elm-select'
                                                                        : ''
                                                                )
                                                                +
                                                                (
                                                                    this.getFieldErrorStatus(props, 'State__c')
                                                                        ? " form-fields-err-common"
                                                                        : ""
                                                                )
                                                            }
                                                        >
                                                            <option className="fx-font-arial" value="0"></option>
                                                            {
                                                                typeof stateConf !== 'undefined'
                                                                && Object.keys(stateConf).length > 0
                                                                && (
                                                                    Object.keys(stateConf)
                                                                        .map(
                                                                            (optionKey, idx) =>
                                                                            (
                                                                                <option
                                                                                className="fx-font-arial"
                                                                                    key={`select_a_state_${idx}`}
                                                                                    value={`${optionKey}`}
                                                                                >
                                                                                    {
                                                                                        `${stateConf[optionKey]}`
                                                                                    }
                                                                                </option>
                                                                            )
                                                                        )
                                                                )
                                                            }
                                                        </Field>
                                                    </div>
                                                    {
                                                        this.getFieldErrorStatus(props, 'State__c') &&
                                                        (
                                                            <div className='field_error_msg_common'>
                                                                {
                                                                    errors.State__c
                                                                }
                                                            </div>
                                                        )
                                                    }
                                                </div>

                                                <div className='form-fields-cntr-common form-elm-a5--cntr'>

                                                    <div className='form-add-fields-sub-cntr-common'>
                                                        <label
                                                            htmlFor="Zipcode__c"
                                                            className='label-elm-common label-elm-a5'
                                                        >
                                                            Zip code*
                                                        </label>
                                                        <Field name="Zipcode__c">
                                                            {
                                                                (
                                                                    {
                                                                        field,
                                                                        form,
                                                                        meta,
                                                                    }
                                                                ) => (
                                                                    <>
                                                                        <input
                                                                            {...field}
                                                                            type="text"
                                                                            autoComplete="off"
                                                                            className={
                                                                                "form-fields-common form-elm-a5" +
                                                                                (
                                                                                    this.getFieldErrorStatus(form, 'Zipcode__c')
                                                                                        ? " form-fields-err-common"
                                                                                        : ""
                                                                                )
                                                                            }
                                                                            value={meta.value ? meta.value : ''}
                                                                            onBlur={e => {

                                                                                e.preventDefault();

                                                                                form.setTouched({ 'Zipcode__c': true });

                                                                                let zipVal = e.target.value;

                                                                                if (
                                                                                    (zipVal.length > zip_code_lower_len)
                                                                                    && zipVal.indexOf('-') === -1
                                                                                ) {

                                                                                    let zipValU = [
                                                                                        zipVal.substring(0, zip_code_lower_len),
                                                                                        '-',
                                                                                        zipVal.substring(zip_code_lower_len)
                                                                                    ].join('');

                                                                                    form.setFieldValue('Zipcode__c', zipValU, true);
                                                                                }
                                                                            }}
                                                                        />
                                                                    </>
                                                                )}
                                                        </Field>
                                                    </div>
                                                    {
                                                        this.getFieldErrorStatus(props, 'Zipcode__c') &&
                                                        (
                                                            <div className='field_error_msg_common'>
                                                                {
                                                                    errors.State__c
                                                                }
                                                            </div>
                                                        )
                                                    }
                                                </div>

                                                <div className='form-fields-cntr-common form-elm-a6--cntr'>

                                                    <div className='form-add-fields-sub-cntr-common'>
                                                        <label
                                                            htmlFor="Buyer"
                                                            className='label-elm-common label-elm-a6'
                                                        >
                                                            Buyer
                                                        </label>
                                                        <Field
                                                            type="text"
                                                            name="Buyer"
                                                            autoComplete="off"
                                                            className='form-fields-common form-elm-a6'
                                                        />
                                                    </div>
                                                </div>

                                                <div className='form-fields-cntr-common form-elm-a7--cntr'>
                                                    <div className='form-add-fields-sub-cntr-common'>
                                                        <label
                                                            htmlFor="Seller"
                                                            className='label-elm-common label-elm-a7'
                                                        >
                                                            Seller
                                                        </label>
                                                        <Field
                                                            type="text"
                                                            name="Seller"
                                                            autoComplete="off"
                                                            className='form-fields-common form-elm-a7' />
                                                    </div>
                                                </div>
                                            </>
                                        )
                                    }

                                    <div className='form-fields-cntr-common form-elm-b--cntr'>
                                        <div className='form-fields-sub-cntr-common'>

                                            <label htmlFor="First_Name__c"
                                                className='label-elm-common label-elm-b'
                                            >
                                                First name*
                                            </label>
                                            <Field
                                                type="text"
                                                name="First_Name__c"
                                                autoComplete="off"
                                                className={
                                                    "form-fields-common form-elm-b" +
                                                    (
                                                        this.getFieldErrorStatus(props, 'First_Name__c')
                                                            ? " form-fields-err-common"
                                                            : ""
                                                    )
                                                }
                                            />
                                        </div>
                                        {
                                            this.getFieldErrorStatus(props, 'First_Name__c') &&
                                            (
                                                <div className='field_error_msg_common'>
                                                    {
                                                        errors.First_Name__c
                                                    }
                                                </div>
                                            )
                                        }
                                    </div>

                                    <div className='form-fields-cntr-common form-elm-c--cntr'>
                                        <div className='form-fields-sub-cntr-common'>

                                            <label
                                                htmlFor="Last_Name__c"
                                                className='label-elm-common label-elm-c'
                                            >
                                                Last name*
                                            </label>
                                            <Field
                                                type="text"
                                                name="Last_Name__c"
                                                autoComplete="off"
                                                className={
                                                    "form-fields-common form-elm-c" +
                                                    (
                                                        this.getFieldErrorStatus(props, 'Last_Name__c')
                                                            ? " form-fields-err-common"
                                                            : ""
                                                    )
                                                }
                                            />
                                        </div>
                                        {
                                            this.getFieldErrorStatus(props, 'Last_Name__c') &&
                                            (
                                                <div className='field_error_msg_common'>
                                                    {
                                                        errors.Last_Name__c
                                                    }
                                                </div>
                                            )
                                        }
                                    </div>

                                    <div className='form-fields-cntr-common form-elm-d--cntr'>

                                        <div className='form-fields-sub-cntr-common'>
                                            <label
                                                htmlFor="Company_Name__c"
                                                className='label-elm-common label-elm-d'
                                            >
                                                Company name
                                            </label>
                                            <Field
                                                type="text"
                                                name="Company_Name__c"
                                                autoComplete="off"
                                                className='form-fields-common form-elm-d'
                                            />
                                        </div>
                                    </div>

                                    <div className='form-fields-cntr-common form-elm-e--cntr'>

                                        <div className='form-fields-sub-cntr-common'>
                                            <label
                                                htmlFor="Email_Address__c"
                                                className='label-elm-common label-elm-e'
                                            >
                                                Email address*
                                            </label>
                                            <Field
                                                type="text"
                                                name="Email_Address__c"
                                                autoComplete="off"
                                                className={
                                                    "form-fields-common form-elm-e" +
                                                    (
                                                        this.getFieldErrorStatus(props, 'Email_Address__c')
                                                            ? " form-fields-err-common"
                                                            : ""
                                                    )
                                                }
                                            />
                                        </div>
                                        {
                                            this.getFieldErrorStatus(props, 'Email_Address__c') &&
                                            (
                                                <div className='field_error_msg_common'>
                                                    {
                                                        errors.Email_Address__c
                                                    }
                                                </div>
                                            )
                                        }
                                    </div>

                                    <div className='form-fields-cntr-common form-elm-f--cntr'>

                                        <div className='form-fields-sub-cntr-common'>
                                            <label
                                                htmlFor="Phone__c"
                                                className='label-elm-common label-elm-f'
                                            >
                                                Phone
                                            </label>
                                            <Field
                                                type="text"
                                                name="Phone__c"
                                                autoComplete="off"
                                                className={
                                                    'form-fields-common form-elm-f' +
                                                    (
                                                        this.getFieldErrorStatus(props, 'Phone__c')
                                                            ? " form-fields-err-common"
                                                            : ""
                                                    )
                                                }
                                            />
                                        </div>
                                        {
                                            this.getFieldErrorStatus(props, 'Phone__c') &&
                                            (
                                                <div className='field_error_msg_common'>
                                                    {
                                                        errors.Phone__c
                                                    }
                                                </div>
                                            )
                                        }
                                    </div>

                                    <div className='form-fields-cntr-common form-elm-g--cntr'>
                                        <div className='form-fields-sub-cntr-common'>
                                            <label
                                                htmlFor="Job_Function__c"
                                                className='label-elm-common label-elm-g'
                                            >
                                                Role
                                            </label>

                                            <Field
                                                component="select"
                                                name="Job_Function__c"
                                                className={
                                                    'form-fields-common form-elm-g'
                                                    +
                                                    (
                                                        values.Job_Function__c == 0
                                                            ? ' form-elm-select'
                                                            : ''
                                                    )
                                                }
                                            >
                                                <option className="fx-font-arial" value="0"></option>
                                                {
                                                    typeof roleConf !== 'undefined'
                                                    && Object.keys(roleConf).length > 0
                                                    && (
                                                        Object.keys(roleConf)
                                                            .map(
                                                                (optionKey, idx) =>
                                                                (
                                                                    <option className="fx-font-arial" key={`select_a_role_${idx}`}
                                                                        value={`${optionKey}`}
                                                                    >
                                                                        {
                                                                            `${roleConf[optionKey]}`
                                                                        }
                                                                    </option>
                                                                )
                                                            )
                                                    )
                                                }
                                            </Field>
                                        </div>
                                    </div>

                                    <div className='form-fields-cntr-common form-elm-h--cntr'>
                                        <div className='form-fields-sub-cntr-common'>
                                            <label
                                                htmlFor="Comment__c"
                                                className='label-elm-common label-elm-h'
                                            >
                                                Your message*
                                            </label>
                                            <Field
                                                as="textarea"
                                                rows={5}
                                                name="Comment__c"
                                                autoComplete="off"
                                                className={
                                                    "form-fields-common form-elm-h" +
                                                    (
                                                        this.getFieldErrorStatus(props, 'Comment__c')
                                                            ? " form-fields-err-common"
                                                            : ""
                                                    )
                                                }
                                            />
                                        </div>
                                        {
                                            this.getFieldErrorStatus(props, 'Comment__c') &&
                                            (
                                                <div className='field_error_msg_common'>
                                                    {
                                                        errors.Comment__c
                                                    }
                                                </div>
                                            )
                                        }
                                    </div>

                                    <div className='form-elm-i--cntr'>
                                        <button type={'submit'} disabled={isSubmitting}
                                            className='form-elm-i'
                                        >
                                            Submit
                                        </button>

                                    </div>
                                    {
                                        isSubmitting && (this.displayLoader())
                                    }

                                </Form>
                            )
                        }

                    }
                </Formik>
            </div>
        )
    }
}

export default CuForm;