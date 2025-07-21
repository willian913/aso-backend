const Employee = require('../models/Employee');

// Buscar todos os colaboradores
exports.getAllEmployees = async (req, res) => {
  try {
    const employees = await Employee.find().sort({ createdAt: -1 });
    res.status(200).json(employees);
  } catch (err) {
    res.status(500).json({ error: 'Erro ao buscar colaboradores.' });
  }
};

// Buscar colaborador por ID
exports.getEmployeeById = async (req, res) => {
  try {
    const employee = await Employee.findById(req.params.id);
    if (!employee) return res.status(404).json({ error: 'Colaborador não encontrado.' });
    res.status(200).json(employee);
  } catch (err) {
    res.status(500).json({ error: 'Erro ao buscar colaborador.' });
  }
};

// Criar colaborador
exports.createEmployee = async (req, res) => {
  try {
    const employee = new Employee(req.body);
    await employee.save();
    res.status(201).json(employee);
  } catch (err) {
    if (err.code === 11000) {
      return res.status(400).json({ error: 'CPF, Email ou ID Petrobras já cadastrado.' });
    }
    res.status(500).json({ error: 'Erro ao criar colaborador.' });
  }
};

// Atualizar colaborador
exports.updateEmployee = async (req, res) => {
  try {
    const updated = await Employee.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true
    });
    if (!updated) return res.status(404).json({ error: 'Colaborador não encontrado.' });
    res.status(200).json(updated);
  } catch (err) {
    res.status(500).json({ error: 'Erro ao atualizar colaborador.' });
  }
};

// Deletar colaborador
exports.deleteEmployee = async (req, res) => {
  try {
    const deleted = await Employee.findByIdAndDelete(req.params.id);
    if (!deleted) return res.status(404).json({ error: 'Colaborador não encontrado.' });
    res.status(200).json({ message: 'Colaborador deletado com sucesso.' });
  } catch (err) {
    res.status(500).json({ error: 'Erro ao deletar colaborador.' });
  }
};

// Buscar por CPF
exports.getEmployeeByCPF = async (req, res) => {
  try {
    const employee = await Employee.findOne({ cpf: req.params.cpf });
    if (!employee) return res.status(404).json({ error: 'Colaborador não encontrado por CPF.' });
    res.status(200).json(employee);
  } catch (err) {
    res.status(500).json({ error: 'Erro ao buscar colaborador por CPF.' });
  }
};

// Buscar por Email
exports.getEmployeeByEmail = async (req, res) => {
  try {
    const employee = await Employee.findOne({ email: req.params.email });
    if (!employee) return res.status(404).json({ error: 'Colaborador não encontrado por email.' });
    res.status(200).json(employee);
  } catch (err) {
    res.status(500).json({ error: 'Erro ao buscar colaborador por email.' });
  }
};

// Buscar por ID Petrobras
exports.getEmployeeByIdPetrobras = async (req, res) => {
  try {
    const employee = await Employee.findOne({ idPetrobras: req.params.idPetrobras });
    if (!employee) return res.status(404).json({ error: 'Colaborador não encontrado por ID Petrobras.' });
    res.status(200).json(employee);
  } catch (err) {
    res.status(500).json({ error: 'Erro ao buscar colaborador por ID Petrobras.' });
  }
};
