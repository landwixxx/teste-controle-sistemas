const expess = require('express');
const router = expess.Router();
const contacts_controller = require('../controller/contacts_controller');

router.get('/', contacts_controller.getContatos);

router.get('/:contact_id', contacts_controller.fetchContato)



router.post('/', contacts_controller.postContato)

router.patch('/', contacts_controller.patchContato)

router.delete('/:contact_number', contacts_controller.deleteContato)



module.exports = router;