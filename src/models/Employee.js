const mongoose = require('mongoose');

const employeeSchema = new mongoose.Schema({
  name: { type: String, required: true },
  cpf: { type: String, required: true, unique: true },
  position: { type: String, required: true },
  idPetrobras: { type: String, required: true, unique: true },
  company: { type: String, required: true },
  healthPlan: { type: String, required: true },
  email: { type: String, unique: true, required: true },
  asoDueDate: { type: Date, required: true },
  asoStatus: { 
    type: String, 
    enum: ['atualizado', 'vencendo', 'pendente', 'vencido'], 
    default: 'atualizado' 
  },
  notificationSuspended: { type: Boolean, default: false },
  nextAsoScheduleDate: { type: Date },
  nextAsoConfirmed: { type: Boolean, default: false },
}, { timestamps: true });

const Employee = mongoose.model('Employee', employeeSchema);
module.exports = Employee;
