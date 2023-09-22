package com.consignmentmanagement.demo;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin(origins = "*", allowedHeaders = "*")
@RestController
@PreAuthorize("hasRole('ROLE_USER')")
public class ConsignmentController {
	
	@Autowired
	ConsignmentRepository repo;
	
	@GetMapping("/consignment/{consignmentId}")
	public Consignment getConsignmen(Integer consignmentId) {
		return repo.findById(consignmentId).orElseThrow(()-> new RuntimeException("No Consignemnt with id "+ consignmentId));
		
	}
	
	@GetMapping("/consignments")
	public List<Consignment> getAllConsignmnets(){
		return repo.findAll();
	}
	
	@PostMapping("/consignment")
	public Consignment addConsignment(@RequestBody Consignment consignment) {
		return repo.save(consignment);
	}
	
	@PutMapping("/consignment/{id}")
	public Consignment updateConsignment(@RequestBody Consignment consignment,Integer id) {
		return repo.save(consignment);
	}

	
	@DeleteMapping("/consignment/{id}")
	public String deleteConsignemtn(Integer id) {
		repo.deleteById(id);
		return "Consignment Deleted";
	}
	
}
