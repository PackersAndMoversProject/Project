package com.backend.serviceImpl;

import com.backend.dto.QuotationRequestDto;
import com.backend.dto.QuotationResponseDto;
import com.backend.entity.Quotation;
import com.backend.entity.Service;
import com.backend.entity.User;
import com.backend.enums.QuotationStatus;
import com.backend.repository.QuotationRepository;
import com.backend.repository.ServiceRepository;
import com.backend.repository.UserRepository;
import com.backend.service.QuotationService;
//import org.springframework.stereotype.Service;

import java.time.LocalDate;

@org.springframework.stereotype.Service
public class QuotationServiceImpl implements QuotationService {

    private final QuotationRepository quotationRepository;
    private final UserRepository userRepository;
    private final ServiceRepository serviceRepository;

    public QuotationServiceImpl(QuotationRepository quotationRepository,
                                UserRepository userRepository,
                                ServiceRepository serviceRepository) {
        this.quotationRepository = quotationRepository;
        this.userRepository = userRepository;
        this.serviceRepository = serviceRepository;
    }

    @Override
    public QuotationResponseDto createQuotation(QuotationRequestDto req) {

        User customer = userRepository.findById(req.customerId)
                .orElseThrow(() -> new RuntimeException("Customer not found"));

        Service service = serviceRepository.findById(req.serviceId)
                .orElseThrow(() -> new RuntimeException("Service not found"));

        // 🔹 BASIC PRICE LOGIC (simple for now)
        double amount = service.getBasePrice();
        amount += req.manpowerCount != null ? req.manpowerCount * 500 : 0;
        amount += Boolean.TRUE.equals(req.packingRequired) ? 1500 : 0;
        amount += Boolean.TRUE.equals(req.insuranceRequired) ? 1000 : 0;

        Quotation quotation = new Quotation();
        quotation.setCustomer(customer);
        quotation.setService(service);

        quotation.setPickupDate(req.pickupDate);
        quotation.setPickupCity(req.pickupCity);
        quotation.setDropCity(req.dropCity);
        quotation.setPickupAddress(req.pickupAddress);
        quotation.setDropAddress(req.dropAddress);

        quotation.setGoodsCategory(req.goodsCategory);
        quotation.setApproximateWeightKg(req.approximateWeightKg);
        quotation.setNumberOfItems(req.numberOfItems);
        quotation.setPickupFloor(req.pickupFloor);
        quotation.setDropFloor(req.dropFloor);
        quotation.setLiftAvailable(req.liftAvailable);

        quotation.setVehicleType(req.vehicleType);
        quotation.setManpowerCount(req.manpowerCount);
        quotation.setPackingRequired(req.packingRequired);
        quotation.setUnpackingRequired(req.unpackingRequired);

        quotation.setInsuranceRequired(req.insuranceRequired);
        quotation.setStorageRequired(req.storageRequired);
        quotation.setSpecialHandling(req.specialHandling);

        quotation.setQuotedAmount(amount);
        quotation.setStatus(QuotationStatus.CREATED);
        quotation.setValidTill(LocalDate.now().plusDays(7));

        quotationRepository.save(quotation);

        QuotationResponseDto response = new QuotationResponseDto();
        response.quotationId = quotation.getQuotationId();
        response.quotedAmount = quotation.getQuotedAmount();
        response.status = quotation.getStatus().name();

        return response;
    }
}
