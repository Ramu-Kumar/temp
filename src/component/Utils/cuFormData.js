var errorArr = [
    {
        "name": "Comment__c",
        "value": "Please enter comment"
    },
    {
        "name": "Email_Address__c",
        "value": "Please enter a email"
    },
    {
        "name": "Email_Address__c_valid",
        "value": "Please enter a valid email"
    },
    {
        "name": "First_Name__c",
        "value": "Please enter first name"
    },
    {
        "name": "Last_Name__c",
        "value": "Please enter last name"
    },
    {
        "name": "PropertyAddress",
        "value": "Please enter property address"
    },
    {
        "name": "Topic__c",
        "value": "Please Select a topic"
    }
]

var topicField = {
    name: 'topic',
    options: [
        'I have an existing order',
        'I want to place a new order',
        'I have already closed my new transaction',
        'Other'
    ],
    additionalFieldsCond: [
        'I have an existing order',
        'I have already closed my new transaction',
    ]

};
const cuForm_POST_URL = '/api/titlegeniuscomponents/SubmitContacUsForm';

var roleField = {
    name: 'role',
    options: [
        'Broker/Agent',
        'Asset Management',
        'Default Management',
        'Loan Officer',
        'Processing',
        'Property Investor',
        'Residential Buyer',
        'Residential Seller',
        'Sales',
        'Other'
    ]

};

var errorMessages = {
    Topic__c: 'Please Select topic',
    PropertyAddress: 'Please enter property address',
    First_Name__c: 'Please enter first name',
    Last_Name__c: 'Please enter last name',
    Email_Address__c: 'Please enter email',
    Email_Address__c_valid: 'Please enter a valid email',
    Comment__c: 'Please enter comment'
};

export {
    topicField,
    roleField,
    errorMessages,
    cuForm_POST_URL,
    errorArr
};