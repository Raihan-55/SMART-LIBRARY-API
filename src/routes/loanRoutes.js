import express from 'express';
import { LoanController } from '../controllers/loanController.js';

const router = express.Router();

router.get('/', LoanController.getLoans);
router.get('/:id', LoanController.getLoan);
router.post('/', LoanController.createLoan);
router.post('/:loanId/return', LoanController.returnLoan);

export default router;
