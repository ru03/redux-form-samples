export default (values) => {
    let errors = {};
    if (!values.name) {
        errors.name = 'Name is required';
    }

    if (!values.email) {
        errors.email = 'Email is required';
    }

    if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = 'Email is invalid';
    }

    if (!values.age) {
        errors.age = 'Age is required';
    } else if (isNaN(values.age)) {
        errors.age = 'Age must be a number';
    }

    if (values.age < 18) {
        errors.age = 'You are under 18';
    }

    return errors;
}
