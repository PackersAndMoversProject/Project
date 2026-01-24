package com.backend.repository;

import com.backend.entity.BookingStatusHistory;
import org.springframework.data.jpa.repository.JpaRepository;

public interface BookingStatusHistoryRepository
        extends JpaRepository<BookingStatusHistory, Long> {
}
