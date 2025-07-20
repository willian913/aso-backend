const express = require('express');
const router = express.Router();
const EmployeesController = require('../controllers/employees.controller');

// CRUD
router.get('/', EmployeesController.getAllEmployees);
router.get('/:id', EmployeesController.getEmployeeById);
router.post('/', EmployeesController.createEmployee);
router.put('/:id', EmployeesController.updateEmployee);
router.delete('/:id', EmployeesController.deleteEmployee);

// Buscar por CPF
router.get('/by-cpf/:cpf', EmployeesController.getEmployeeByCPF);

// Buscar por Email
router.get('/by-email/:email', EmployeesController.getEmployeeByEmail);

// Buscar por ID Petrobras
router.get('/by-idpetrobras/:idPetrobras', EmployeesController.getEmployeeByIdPetrobras);


// Rota extra opcional (exemplo): suspender notificações
// router.patch('/:id/suspend', EmployeesController.suspendNotifications)

module.exports = router;
